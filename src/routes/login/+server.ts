import { AuthApiError } from '@supabase/supabase-js'
import { error, redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";


export const POST: RequestHandler = async ({ request, locals }) => {
    const body = Object.fromEntries(await request.formData())

    const { data, error: err } = await locals.sb.auth.signInWithPassword({
        email: body.email as string,
        password: body.password as string
    })

    if (err) {
        if (err instanceof AuthApiError && err.status === 400) {
            throw error(400, 'Invalid credentials.')
        }

        throw error(500, 'Server error. Please try again later.')
    }

    throw redirect(303, "/")
};