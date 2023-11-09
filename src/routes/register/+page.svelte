<script lang="ts">
	import '../../app.postcss';
	import type { PageData } from './$types';
	import '../styles.css';

	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-start h-screen pt-5 w-full">
	<span class="h1 mb-4">Criar conta</span>
	<form action="?/register" method="post" class="flex flex-col w-1/2">
		<label class="label mb-4" for="email">
			<span> Email </span>
			<input class="input" name="email" title="Email" type="email" placeholder="email" />
		</label>
		<label class="label mb-4" for="password">
			<span> Password </span>
			<input class="input" type="password" name="password" placeholder="password" />
		</label>

		<button type="submit" class="btn variant-filled-surface">Criar conta</button>
        <hr class="my-4"/>
		<button type="button" class="btn variant-ghost mb-4">
			<i class="bi bi-google"></i>
            <span> Entrar com a Google </span>
		</button>
		<button type="button" class="btn variant-ghost">
			<i class="bi bi-facebook"></i>
            <span> Entrar com o Facebook </span>
		</button>
	</form>
</main>
