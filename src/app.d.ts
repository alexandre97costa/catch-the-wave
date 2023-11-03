// src/app.d.ts

import type { TypedSupabaseClient } from '@supabase/auth-helpers-sveltekit/dist/types'
import { SupabaseClient, Session } from '@supabase/supabase-js'

declare global {
  declare namespace App {
    interface Locals {
      sb: TypedSupabaseClient
      session: Session | null
      supabase: SupabaseClient
      getSession(): Promise<Session | null>
    }
    interface PageData {
      session: Session | null
    }
    // interface Error {}
    // interface Platform {}
  }
}