
import { createClient } from '@supabase/supabase-js'
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJjdGhhYWdibmhvaml0bWt1b3h1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODQ5OTU0OTksImV4cCI6MjAwMDU3MTQ5OX0.vc9h4Rx8o3yviGJQiJzZspcH4rojPQwr43REQVYProc"


const SUPABASE_URL = "https://bcthaagbnhojitmkuoxu.supabase.co"

const useSupabase = ()=>{
// Create a single supabase client for interacting with your database

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY)

return {supabase,}
}

export default useSupabase