<script lang="ts">
	import Hero from './Hero.svelte';
	import About from './About.svelte';
</script>

<Hero />
<About />
<div class="container mx-auto flex flex-col items-center py-12 md:flex-row md:py-24">
	<div class="flex flex-1 flex-col p-4">
		<div class="flex flex-1 items-center justify-center">
			<h2
				class="mb-4 flex items-center justify-center text-3xl font-bold leading-tight text-primary md:text-4xl"
			>
				About Chemmanur
			</h2>
		</div>
	</div>
</div>
