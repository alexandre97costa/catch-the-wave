<script>
	export let data;

	let user = data.user[0];

	$: {
		user = data.user[0];
	}
</script>

<ul>
    hello {user?.first_name} {user?.last_name}
</ul>
