<script lang="ts">
	import '../app.postcss';
	import './styles.css';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	export let data: PageData;

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseClient.auth.onAuthStateChange(() => {
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<svelte:head>
	<title>Catch the wave!</title>
</svelte:head>

<nav class="navbar navbar-expand-lg bg-body-tertiary">
	<div class="container-fluid">
		<a class="navbar-brand d-flex align-items-center gap-3" href="#">
			<span class="fs-2 lh-1">🌊 Wave</span>
		</a>
		<ul class="navbar-nav flex-row gap-3">
			{#if data.session}
				<li class="nav-item">
					<a class="nav-link" aria-current="page" href="#">Waves</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Favoritos</a>
				</li>
				<li class="nav-item">
					<a class="nav-link" href="#">Conta</a>
				</li>
			{:else}
				<li class="nav-item">
					<a class="btn btn-outline-dark" href="/login">Login</a>
				</li>
				<li class="nav-item">
					<a class="btn btn-primary" href="/register">Register</a>
				</li>
			{/if}
		</ul>
	</div>
</nav>

<div class="container">
	<slot />
</div>
