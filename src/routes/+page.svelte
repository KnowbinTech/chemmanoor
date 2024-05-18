<script lang="ts">
	import Hero from './Hero.svelte';
	import About from './About.svelte';
</script>

<Hero />
<About />
<div class="container max-w-5xl mx-auto flex flex-col items-center py-12 md:flex-row md:py-24">
	<div class="flex flex-1 flex-col p-4">
		<div class="flex flex-1 items-center justify-center mb-10">
			<h2
				class="mb-4 flex items-center justify-center text-3xl font-bold leading-tight text-primary md:text-4xl"
			>
				Margadeepankal
			</h2>
		</div>
    <div class="grid grid-cols-3 gap-8">
      <div>
        <div class="w-full h-[280px] overflow-hidden rounded-md w-full">
          <img src={'/images/leaders/Jacob-chemmanoor.jpg'} alt="" srcset="" class="w-full">
        </div>
       <h6 class="text-primary text-lg font-medium pt-4 text-center">Fr. Jacob Chemmanoor</h6>
      </div>
      <div>
        <div class="w-full h-[280px] overflow-hidden rounded-md ">
          <img src={'/images/leaders/Fr-John-chemmanoor.jpg'} alt="" srcset="" class="w-full">
        </div>
        <h6 class="text-primary text-lg font-medium pt-4 text-center">Fr. John Chemmanoor</h6>
      </div>
      <div>
        <div class="w-full h-[280px] overflow-hidden rounded-md">
          <img src={'/images/leaders/fr-antony-chemmanoor.jpg'} alt="" srcset="" class="w-full">
        </div>
        <h6 class="text-primary text-lg font-medium pt-4 text-center">Fr. Antony Chemmanoor</h6>
      </div>
    </div>
	</div>
</div>
