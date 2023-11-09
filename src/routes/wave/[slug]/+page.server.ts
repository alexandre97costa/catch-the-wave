import { supabaseClient } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { data } = await supabaseClient.from('wave').select();

	return {
		countries: data ?? [],
		params: params ?? []
	};
};