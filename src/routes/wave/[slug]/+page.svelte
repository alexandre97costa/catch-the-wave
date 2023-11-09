<script>
	export let data;
</script>

<ul>
    hello {data.params.slug}
	{#each data.countries as country}
		<li>{country.name}</li>
	{/each}
</ul>
