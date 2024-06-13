const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhqenhrcGxhb3J6aWV5dm16aGZ2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTgyNjc1NDAsImV4cCI6MjAzMzg0MzU0MH0.f8p9N2vRkv-qxAusDxjIYtERkMDKcoOxfTqdt4dV-vE';
const PROJECT_URL = 'https://xjzxkplaorzieyvmzhfv.supabase.co'

import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(PROJECT_URL, API_KEY)