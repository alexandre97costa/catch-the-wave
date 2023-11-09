<script>
	export let data;

	$: {
		console.log(data);
	}
</script>

<ul>
    hello {data.user[0].first_name} {data.user[0].last_name}
</ul>
