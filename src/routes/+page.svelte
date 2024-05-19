<script lang="ts">
	import Hero from './Hero.svelte';
	import About from './About.svelte';
	import CurrentLeaders from './CurrentLeaders.svelte';
</script>

<Hero />
<About />
<div class="container max-w-7xl mx-auto flex flex-col items-center py-12 md:flex-row md:py-24">
	<div class="flex flex-1 flex-col p-4">
		<div class="flex flex-1 items-center justify-center mb-10">
			<h2 class="mb-4 flex items-center justify-center text-3xl font-bold leading-tight text-primary md:text-4xl">
				Margadeepangal
			</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-background shadow-lg rounded-lg overflow-hidden" style="height: 320px;">
				<img src={'/images/leaders/Jacob-chemmanoor.jpg'} alt="Fr. Jacob Chemmanoor" class="w-full h-auto object-cover">
				<div class="p-6">
					<h6 class="text-primary text-lg font-medium text-center">Fr. Jacob Chemmanoor</h6>
				</div>
			</div>
			<div class="bg-background shadow-lg rounded-lg overflow-hidden" style="height: 320px;">
				<img src={'/images/leaders/Fr-John-chemmanoor.jpg'} alt="Fr. John Chemmanoor" class="w-full h-auto object-cover">
				<div class="p-6">
					<h6 class="text-primary text-lg font-medium text-center">Fr. John Chemmanoor</h6>
				</div>
			</div>
			<div class="bg-background shadow-lg rounded-lg overflow-hidden" style="height: 320px;">
				<img src={'/images/leaders/fr-antony-chemmanoor.jpg'} alt="Fr. Antony Chemmanoor" class="w-full h-auto object-cover">
				<div class="p-6">
					<h6 class="text-primary text-lg font-medium text-center">Fr. Antony Chemmanoor</h6>
				</div>
			</div>
		</div>
	</div>
</div>
<CurrentLeaders />

