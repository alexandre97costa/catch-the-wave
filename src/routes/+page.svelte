<script lang="ts">
	import { enhance } from '$app/forms';
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-start h-screen pt-5 w-full">
	{#if data.session}
		<div class="h1">Bem vindo, {data.user[0]?.first_name ?? 'undefined'}!</div>
	{:else}
		<div class="h1">Bem vindo à Wave!</div>
	{/if}
</main>
