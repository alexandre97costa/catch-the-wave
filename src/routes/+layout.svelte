<script lang="ts">
	import '../app.postcss';
	import './styles.css';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import type { PageData } from './$types';

	import {
		AppBar,
		AppShell,
		LightSwitch,
		type PopupSettings,
		storePopup,
		popup
	} from '@skeletonlabs/skeleton';
	import { computePosition, autoUpdate, offset, shift, flip, arrow } from '@floating-ui/dom';
	storePopup.set({ computePosition, autoUpdate, offset, shift, flip, arrow });

	export let data: PageData;

	const popupLogin: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupLogin',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};
	const popupRegister: PopupSettings = {
		// Represents the type of event that opens/closed the popup
		event: 'click',
		// Matches the data-popup value on your popup element
		target: 'popupRegister',
		// Defines which side of your trigger the popup will appear
		placement: 'bottom'
	};

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

<AppShell regionPage="relative" slotPageHeader="sticky top-0 z-10">
	<svelte:fragment slot="header">
		<AppBar gridColumns="grid-cols-3" slotDefault="place-self-center" slotTrail="place-content-end">
			<svelte:fragment slot="lead"><span class="h3">Wave</span></svelte:fragment>
			<svelte:fragment slot="trail">
				<LightSwitch />

				{#if data.session}
					<button type="button" class="btn variant-ringed-surface">
						<span>Conta</span>
					</button>
				{:else}
					<!-- popup login -->
					<div class="card p-4 w-72 shadow-xl variant-surface" data-popup="popupLogin">
						<form action="?/login" method="post" class="d-flex flex-column gap-3">
							<label class="label mb-3" for="email">
								<span> Email </span>
								<input class="input" name="email" title="Email" type="email" placeholder="email" />
							</label>
							<label class="label mb-3" for="password">
								<span> Password </span>
								<input class="input" type="password" name="password" />
							</label>

							<button type="submit" class="btn variant-filled-surface">Login</button>
						</form>
					</div>

					<button type="button" class="btn variant-ringed-surface" use:popup={popupLogin}>
						<span>Login</span>
					</button>

					<!-- popup register -->
					<div class="card p-4 w-72 shadow-xl variant-filled" data-popup="popupRegister">
						<div><p>Demo Content</p></div>
					</div>

					<button type="button" class="btn variant-filled" use:popup={popupRegister}>
						<span>Register</span>
					</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="pageFooter">Page Footer</svelte:fragment>
</AppShell>

<!-- 
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
 -->
