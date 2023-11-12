<script lang="ts">
	import type { PageData } from "./$types";

	export let data:PageData;

	let user = data.user;

	$: {
		user = data.user;
		console.log(data.user)
	}
</script>

<ul>
    hello {user?.first_name} {user?.last_name}
</ul>
