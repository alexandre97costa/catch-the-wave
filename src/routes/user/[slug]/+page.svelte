<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	let user = data.user[0];
	let audio_source: any;

	async function getAudio() {
		const { data: audio, error } = await supabaseClient.storage
			.from('waves')
			.download('Caravan.mp3');

		console.log('audio', audio);
		console.log('error', error);
	}

	$: {
		user = data.user[0];
	}
</script>

<ul>
	hello {user?.first_name}
	{user?.last_name}

	<button on:click={getAudio}>Get Audio</button>

	<audio controls src={audio_source} />
</ul>
