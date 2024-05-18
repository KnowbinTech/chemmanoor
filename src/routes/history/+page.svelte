<script lang="ts">
    import type { PageData } from './$types';
    import { Button } from "$lib/components/ui/button";
    import aniversery from "$lib/images/aniversery.png";
    let image = aniversery;
    
    export let data: PageData;
</script>

<div class="p-4 md:p-8">
    
    
    <section class="mb-8 ">
        <div class="flex flex-col items-center h-auto bg-white shadow-md rounded-lg p-4">
            <div class="w-full text-center ">
                <div class="text-xl font-bold">Origins of the Chemmanur Family</div>
                <p class="text-base text-secondary-color">
                    The Chemmanur family traces its roots back to the early 1600s in the lush landscapes of Kerala.<br> Originally hailing from Perakam, the family has a storied history that intertwines with the local culture and traditions of the region.<br> The family name, 'Chemmanur,' is believed to be derived from the Malayalam words for 'red soil,' reflecting the rich, fertile lands of their ancestral home.
                </p>
            </div>
        </div>
    </section>

    <section class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center bg-white shadow-md rounded-lg p-4">
            <img src={image} alt="Migration" class="md:w-1/2 rounded md:order-1">
            <div class="md:w-1/2 md:pl-4">
                <h2 class="text-xl font-semibold">Migration and Settlement</h2>
                <p class="text-base text-secondary-color">
                    In the late 1600s, a significant event led to the migration of part of the family to Tirur. This move was catalyzed by an invitation from the local temple authorities to take over certain religious responsibilities, a testament to the family's esteemed position within the community. As a reward for their service, the family was granted land, marking the beginning of a new chapter in Tirur.
                </p>
            </div>
        </div>
    </section>
    <section class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center bg-white shadow-md rounded-lg p-4">
            <img src={image} alt="Migration" class="md:w-1/2 rounded md:order-1">
            <div class="md:w-1/2 md:pl-4">
                <h2 class="text-xl font-semibold">Embracing Christianity</h2>
                <p class="text-base text-secondary-color">
                    The Chemmanur family's conversion to Christianity marked a pivotal moment in their history. It is said that during the Apostle Thomas’s visit to Kerala, the family embraced the new faith. This spiritual transition played a crucial role in shaping the community's future, influencing their values, traditions, and societal roles.
                     </p>
            </div>
        </div>
    </section>
    <section class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center bg-white shadow-md rounded-lg p-4">
            <img src={image} alt="Migration" class="md:w-1/2 rounded md:order-1">
            <div class="md:w-1/2 md:pl-4">
                <h2 class="text-xl font-semibold">Formation of Chemmanur Kudumbayogam</h2>
                <p class="text-base text-secondary-color">Twenty-five years ago, in recognition of their expanding family tree and to preserve their rich heritage, the Chemmanur family established the 'Chemmanur Kudumbayogam.' This community organization was founded to strengthen family ties, celebrate their collective history, and support one another in times of need. The Kudumbayogam also aimed to document and pass down the family's legacy to future generations, ensuring that their stories and traditions would not be forgotten.</p>
            </div>
        </div>
    </section>
    <section class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center bg-white shadow-md rounded-lg p-4">
            <img src={image} alt="Migration" class="md:w-1/2 rounded md:order-1">
            <div class="md:w-1/2 md:pl-4">
                <h2 class="text-xl font-semibold">Milestones and Achievements</h2>
                <p class="text-base text-secondary-color">Over the years, the Chemmanur Kudumbayogam has been instrumental in organizing family gatherings, cultural events, and educational programs that reinforce the family’s historical significance and contributions to society. These events serve not only as reunions but also as platforms for the younger generations to learn about their heritage.
                </p>
            </div>
        </div>
    </section>

    <!-- Repeat for other sections, alternating the order of the image -->

    <section class="mb-8">
        <div class="flex flex-col md:flex-row md:items-center bg-white shadow-md rounded-lg p-4">
            <img src={image} alt="Today and Beyond" class="md:w-1/2 rounded md:order-2">
            <div class="md:w-1/2 md:pl-4">
                <h2 class="text-xl font-semibold">Today and Beyond</h2>
                <p class="text-base text-secondary-color">
                    Today, the Chemmanur Kudumbayogam continues to thrive as a vibrant community, with members spread across the globe yet remaining closely knit through shared history and ongoing communication. As we celebrate the 25th anniversary of our Kudumbayogam, we look forward to building on our past achievements and embracing the future with open arms, guided by the principles and resilience inherited from our ancestors.
                </p>
                <Button class="mt-4">Learn More</Button>
            </div>
        </div>
    </section>
</div>