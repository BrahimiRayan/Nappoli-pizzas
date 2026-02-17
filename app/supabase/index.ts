import { createClient } from '@supabase/supabase-js'


async function loadPizzas() {
      const config = useRuntimeConfig()
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabasePublishableKey
  )
  const { data, error } = await supabase.from('Pizzas').select('*')
  if (error) {
    return []
  }

  return data;
}

async function loadBoissons() {
      const config = useRuntimeConfig()
  const supabase = createClient(
    config.public.supabaseUrl,
    config.public.supabasePublishableKey
  )
  const { data, error } = await supabase.from('boissons').select('*')
  if (error) throw error
  return data
}

export {loadPizzas , loadBoissons}