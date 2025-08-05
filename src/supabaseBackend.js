import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://cbcubnevdaruscorciue.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNiY3VibmV2ZGFydXNjb3JjaXVlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM3MDE1NzcsImV4cCI6MjA2OTI3NzU3N30.wjUYMnoiweb-qpZpqLIuOHg0UtXMcIQ3_lAm_pDvyHw";

export const supabase = createClient(supabaseUrl, supabaseKey);
