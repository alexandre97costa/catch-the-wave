<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;

	$: {
		console.log(data);
	}
</script>

<ul>
	{#each data.waves as wave}
		<li>{wave}</li>
	{/each}
</ul>
