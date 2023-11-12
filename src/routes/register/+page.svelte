<script lang="ts">
	import '../../app.postcss';
	import type { PageData } from './$types';
	import '../styles.css';

	export let data: PageData;
</script>

<main class="flex flex-col items-center justify-start h-screen pt-5 w-full">
	<span class="h1 mb-4">Criar conta</span>
	<form action="?/register" method="post" class="flex flex-col w-1/2">

		<!-- Nome -->
		<label class="label mb-4" for="nome">
			<span> Nome </span>
			<input class="input" name="nome" title="Nome" type="text" placeholder="Nome" />
		</label>

		<!-- Email -->
		<label class="label mb-4" for="email">
			<span> Email </span>
			<input class="input" name="email" title="Email" type="email" placeholder="Email" />
		</label>
		<!-- Password -->
		<label class="label mb-4" for="password">
			<span> Password </span>
			<input class="input" type="password" name="password" placeholder="Password" />
		</label>

		<button type="submit" class="btn variant-filled-primary mt-5">Criar conta</button>

		<!-- Outros OAuth Providers -->
        <hr class="my-4"/>
		<button type="button" class="btn variant-ghost mb-4" title="Coming soon!" disabled>
			<i class="bi bi-google"></i>
            <span> Entrar com a Google </span>
		</button>
		<button type="button" class="btn variant-ghost" title="Coming soon!" disabled>
			<i class="bi bi-facebook"></i>
            <span> Entrar com o Facebook </span>
		</button>
	</form>
</main>
