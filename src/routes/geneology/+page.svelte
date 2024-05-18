<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const charts = [
		{
			name: 'Chart 1',
			branches: [{
                name:"B 1c02",
                image:"/images/charts/B1C1.jpg"
            }]
		}
	];
</script>
<div>
    {#each charts as chart}
    <div class="container mx-auto px-4">
        <h2 class="my-6 text-2xl font-bold">{chart.name}</h2>
        <div class="mb-10 grid grid-cols-1 gap-x-6 gap-y-10 md:grid-cols-3 lg:grid-cols-4">
            {#each chart.branches as branch}
            <div class="card w-full overflow-hidden rounded-lg bg-white shadow-lg">
                <div class="w-full p-8">
                    <img src={branch.image} alt="" class="h-full w-full object-cover" />
                </div>
                <div class="px-4 mb-4">
                    <h3 class="text-lg font-bold">{branch.name}</h3>
                </div>
            </div>
            {/each}
        </div>
    </div>
    {/each}
</div>


