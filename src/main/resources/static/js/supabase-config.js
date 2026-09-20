/* ==========================================================================
   Camploop — Supabase project config.
   Fill these in from Supabase Dashboard -> Project Settings -> API.
   The anon/public key is SAFE to expose in frontend code — Row Level
   Security on each table is what actually protects the data.
   ========================================================================== */

   const SUPABASE_URL = 'https://zcvqlgizstmfmbjfwvnf.supabase.co';
   const SUPABASE_ANON_KEY = 'sb_publishable_9AaePClSAf01M55gXBoWyQ_VvOa2Cei';

   const supabaseClient = window.supabase.createClient(
       SUPABASE_URL,
       SUPABASE_ANON_KEY
   );





