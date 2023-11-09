<script lang="ts">
	import '../app.postcss';
	import './styles.css';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabaseClient } from '$lib/supabase';
	import { enhance, type SubmitFunction } from '$app/forms';
	import type { LayoutData } from './$types';

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

	export let data: LayoutData;

	const popupAccount: PopupSettings = {
		event: 'click',
		target: 'popupAccount',
		placement: 'bottom'
	};
	const popupLogin: PopupSettings = {
		event: 'click',
		target: 'popupLogin',
		placement: 'bottom'
	};
	const popupRegister: PopupSettings = {
		event: 'click',
		target: 'popupRegister',
		placement: 'bottom'
	};

	const submitLogout:SubmitFunction = async ({ cancel }) => {
		const { error } = await supabaseClient.auth.signOut();
		if (error) {
			console.log(error);
		}
		cancel();
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
					<!-- popup account -->
					<div class="card p-4 w-72 shadow-xl variant-surface" data-popup="popupAccount">
						<nav class="list-nav">
							<ul>
								<li>
									<a href="/elements/lists">
										<i class="bi bi-person-fill"></i>
										<span class="flex-auto">Perfil</span>
									</a>
								</li>
								<li>
									<form action="/logout" method="POST"  use:enhance={submitLogout}>
										<button type="submit" class="w-full items-start">
											<i class="bi bi-box-arrow-right"></i>
											<span class="">Sair</span></button>
									</form>
								</li>
								<hr/>
								<li>
									<a href="/elements/lists">
										<span class="badge-icon variant-filled"><i class="bi bi-soundwave"></i></span>
										<span class="flex-auto">Os meus waves</span>
									</a>
								</li>
								<li>
									<a href="/elements/lists">
										<span class="badge-icon variant-filled"><i class="bi bi-star-fill"></i></span>
										<span class="flex-auto">Favoritos</span>
									</a>
								</li>
								
							</ul>
						</nav>
					</div>

					<!-- btn account -->
					<button type="button" class="btn hover:variant-soft-primary" use:popup={popupAccount}>
						<span>Conta</span>
						<i class="bi bi-caret-down-fill text-surface-500" />
					</button>
				{:else}
					<!-- popup login -->
					<div class="card p-4 w-72 shadow-xl variant-surface" data-popup="popupLogin">
						<form action="/login" method="post" class="d-flex flex-column gap-3">
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

					<!-- btn login -->
					<button type="button" class="btn hover:variant-soft-primary" use:popup={popupLogin}>
						<span>Login</span>
					</button>

					<!-- popup register -->
					<div class="card p-4 w-72 shadow-xl variant-filled" data-popup="popupRegister">
						<div><p>Demo Content</p></div>
					</div>

					<!-- btn register -->
					<button type="button" class="btn variant-filled" use:popup={popupRegister}>
						<span>Criar conta</span>
					</button>
				{/if}
			</svelte:fragment>
		</AppBar>
	</svelte:fragment>

	<slot />
	<svelte:fragment slot="pageFooter" />
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
