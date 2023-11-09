<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main>
	{#if data.session}
		<p>Bem vindo, {data.user[0]?.first_name ?? 'undefined'}!</p>
	{:else}
		<p>Bem vindo à Wave!</p>
	{/if}
</main>
