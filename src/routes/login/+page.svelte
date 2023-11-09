<script lang="ts">
</script>

<main>
	<h1>Login</h1>
	<form action="?/login" method="post" class="d-flex flex-column gap-3">
		<div class="">
			<label class="form-label" for="">Email</label>
			<input class="form-control" type="text" name="email" />
		</div>
		<div class="">
			<label class="form-label" for="">Password</label>
			<input class="form-control" type="password" name="password" />
		</div>

		<button type="submit" class="btn btn-primary w-100">Login</button>
	</form>
</main>
