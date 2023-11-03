<script lang="ts">
	import './styles.css';
	import { invalidate, invalidateAll } from '$app/navigation';
	import { onMount } from 'svelte';
	import { supabaseCLient } from '$lib/supabase';

	onMount(() => {
		const {
			data: { subscription }
		} = supabaseCLient.auth.onAuthStateChange(() => {
			console.log('Auth state change detected')
			invalidateAll();
		});

		return () => {
			subscription.unsubscribe();
		};
	});
</script>

<svelte:head>
	<title>User Management</title>
</svelte:head>

<slot />
