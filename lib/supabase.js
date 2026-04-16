import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://rzgiunyzaukflikmvgpt.supabase.co"
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ6Z2l1bnl6YXVrZmxpa212Z3B0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzYxOTE1NDgsImV4cCI6MjA5MTc2NzU0OH0.d6TDoEG1mBf7D6LWj5nDTF_mrH5w_Wqiv92ZjTo31iM"

export const supabase = createClient(supabaseUrl, supabaseAnonKey)