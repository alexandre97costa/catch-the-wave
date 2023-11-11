import { supabaseClient } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {


	// get own id
	const { session } = await parent();


	const { data: user, error } = await supabaseClient
		.from('profile')
		.select('first_name, last_name')
		.eq('id', session?.user.id);

	

	// let audio_source = 'https://rhardivzimjmuinzztnr.supabase.co/storage/v1/object/public/waves/Caravan.mp3'
	const { data: audio } = supabaseClient.storage.from('waves').getPublicUrl('Caravan.mp3')


	return {
		user: user ?? error,
		audio_source: audio.publicUrl
	};
};