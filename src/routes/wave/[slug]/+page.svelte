<script lang="ts">
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	let user = data.user;
	let audio_source: any;

	$: {
		console.log(data);

		if (data.errors[0]) {
			console.log('has error');
		}
	}
</script>

<ul>
	{#if !data.errors[0]}
		hello {user?.first_name}
		{user?.last_name}
	{/if}

	<div class="h1 mb-4">{data.wave?.name}</div>
	<audio controls src={data.audio_source} />
</ul>
