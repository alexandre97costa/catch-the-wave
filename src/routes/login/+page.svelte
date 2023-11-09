<script lang="ts">
</script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="post" class="d-flex flex-column gap-3">
		<label class="label" for="">
			<span> Email </span>

			<input class="input" title="Input (text)" type="text" placeholder="input text" />
		</label>
		<label class="label" for="">
			<span> Password </span>

			<input class="input" type="password" name="password" />
		</label>

		<button type="submit" class="btn variant-filled-surface">Login</button>
	</form>
</main>
