import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { name } = await req.json()
    console.log(`Looking for secret with name: ${name}`)

    // First try with the original name
    let secretValue = Deno.env.get(name)
    
    if (!secretValue) {
      // If not found, try with underscores instead of spaces
      const nameWithUnderscores = name.replace(/\s+/g, '_')
      console.log(`Trying alternative name format: ${nameWithUnderscores}`)
      secretValue = Deno.env.get(nameWithUnderscores)
    }
    
    if (!secretValue) {
      console.error(`Secret "${name}" not found`)
      throw new Error(`Secret "${name}" not found in environment variables`)
    }

    console.log(`Successfully retrieved secret for: ${name}`)

    // Return using the original name format from the request
    return new Response(
      JSON.stringify({ [name]: secretValue }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    )
  } catch (error) {
    console.error('Error in get-secret function:', error)
    
    return new Response(
      JSON.stringify({ 
        error: error.message,
        details: 'Make sure the secret is properly set in the Supabase Edge Function secrets with the correct name format.'
      }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      }
    )
  }
})
