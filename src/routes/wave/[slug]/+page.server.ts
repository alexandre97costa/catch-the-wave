import { supabaseClient, supabaseStorage } from '$lib/supabase';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params, parent }) => {


	// get own id
	const { session } = await parent();


	const { data: user, error: user_error } = await supabaseClient
		.from('profile')
		.select('first_name, last_name')
		.eq('id', session?.user.id);

	const { data: wave, error: wave_error } = await supabaseClient
		.from('wave')
		.select('name, file_id')
		.eq('id', params.slug);

	const { data: wave_file_name, error: wave_file_name_error } = await supabaseStorage
		.from('objects')
		.select('name')
		.eq('id', wave?.[0].file_id)



	// let audio_source = 'https://rhardivzimjmuinzztnr.supabase.co/storage/v1/object/public/waves/Caravan.mp3'
	const { data: audio } = supabaseClient.storage.from('waves').getPublicUrl(wave_file_name?.[0].name)


	return {
		user: user?.[0],
		audio_source: audio.publicUrl,
		wave: wave?.[0],
		errors: [user_error, wave_error, wave_file_name_error]
	};
};