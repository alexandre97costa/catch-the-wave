<script lang="ts">
	import { enhance } from '$app/forms';
	import type { SubmitFunction } from '$app/forms';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	// import { PageData } from './$types';k

	export let data: PageData;

	const submitLogout:SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
	};
</script>

<main>
	{#if data.session}
		<p>Welcome, {data.session.user.email}</p>
		<form action="/logout" method="POST" use:enhance={submitLogout}>
			<button type="submit" class="btn btn-primary">Logout</button>
		</form>
	{:else}
		<p>Bem vindo à Wave!</p>
	{/if}
</main>
