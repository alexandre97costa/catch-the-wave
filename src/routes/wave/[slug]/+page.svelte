<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	let user = data.user[0];
	let audio_source: any;

	$: {
		user = data.user[0];
		console.log(data);
	}
</script>

<ul>
	hello {user?.first_name}
	{user?.last_name}


	<audio controls src={data.audio_source} />
</ul>
