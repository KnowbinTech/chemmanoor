<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<div class="font-sans">
	<div class="flex w-full flex-col space-y-8 px-4 py-8">
		<div class="relative isolate px-6 pt-14 lg:px-8">
			<div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
				<div class="text-center">
					<h1 class="text-4xl font-bold tracking-tight text-primary sm:text-6xl">Our Heritage</h1>
					<p class="mt-6 text-lg leading-8 text-muted-foreground">
						Welcome to the Chemmanur Kudumbayogam, a vibrant community dedicated exclusively to the
						members of the Chemmanur family. Our roots trace back to the early 1600s in Kerala,
						where our ancestors first established themselves as a prominent family in Perakam. Over
						the centuries, we have embraced our rich cultural heritage and strong familial bonds,
						which have been the cornerstone of our community.
					</p>
				</div>
			</div>
		</div>

		<section class="flex flex-col md:py-48 items-center md:flex-row">
			<h1
				class=" mb-4 w-full text-left text-3xl font-bold tracking-tight text-primary sm:text-5xl md:mb-0 md:w-1/3 md:text-center"
			>
				Our Mission
			</h1>
			<div class="w-full text-lg leading-8 text-muted-foreground md:w-2/3 md:pr-44">
				<p>
					The mission of Chemmanur Kudumbayogam is to preserve and celebrate the unique history and
					traditions of the Chemmanur family. We strive to maintain a close-knit community where
					family members can connect, share, and continue the legacy of our ancestors. Our community
					is committed to:
				</p>
				<ul class="mt-2 list-disc pl-5">
					<li>
						Preserving our cultural heritage through documentation, events, and educational
						programs.
					</li>
					<li>
						Strengthening family bonds by facilitating family reunions, communications, and support
						networks.
					</li>
					<li>Fostering values such as respect, integrity, and unity among all family members.</li>
				</ul>
			</div>
		</section>

		<section class="flex flex-col md:py-48 items-center md:flex-row">
			<h1
				class=" mb-4 w-full text-left text-3xl font-bold tracking-tight text-primary sm:text-5xl md:mb-0 md:w-1/3 md:text-center"
			>
				Our Vision
			</h1>
			<div class="w-full text-lg leading-8 text-muted-foreground md:w-2/3 md:pr-44">
				<p>
					Our vision is to be a model community that upholds and passes down the values and
					traditions of the Chemmanur family to future generations. We aim to create a supportive
					and engaging environment where every family member feels valued and connected, no matter
					where they are in the world.
				</p>
			</div>
		</section>
		<section class="flex flex-col md:py-48 items-center md:flex-row">
			<h1
				class=" mb-4 w-full text-left text-3xl font-bold tracking-tight text-primary sm:text-5xl md:mb-0 md:w-1/3 md:text-center"
			>
				Our Values
			</h1>
			<div class="w-full text-lg leading-8 text-muted-foreground md:w-2/3 md:pr-44">
				<p>
					Unity: We believe in the strength of our family ties and strive to keep our community
					united across generations and geographies.
				</p>
				<p>
					Heritage: We honor our past by preserving our family’s history and traditions, ensuring
					they remain alive for future generations.
				</p>
				<p>
					Respect: We uphold a culture of respect and dignity for all family members, celebrating
					the diversity within our family.
				</p>
				<p>
					Support: We provide a supportive network for family members, offering assistance and
					celebrating each other’s successes and milestones.
				</p>
			</div>
		</section>

		<section class="flex flex-col md:py-48 items-center md:flex-row">
			<h1
				class=" mb-4 w-full text-left text-3xl font-bold tracking-tight text-primary sm:text-5xl md:mb-0 md:w-1/3 md:text-center"
			>
				Our Community
			</h1>
			<div class="w-full text-lg leading-8 text-muted-foreground md:w-2/3">
				<p class="md:pr-44">
					Chemmanur Kudumbayogam is more than just a family organization; it is a home where all
					Chemmanur family members find a sense of belonging and connection. Established 25 years
					ago, our community has grown to include members from various parts of the world, each
					contributing to the rich tapestry of our shared heritage.
				</p>
			</div>
		</section>

		<div class="relative isolate px-6 pt-14 lg:px-8">
			<div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
				<div class="text-center">
					<h1 class="text-4xl font-bold tracking-tight text-primary sm:text-6xl">Join Us</h1>
					<p class="mt-6 text-lg leading-8 text-muted-foreground">
						As a member of the Chemmanur family, we invite you to explore the various facets of our
						community through this website. Engage with our history, participate in our events, and
						contribute to our ongoing story. Together, we continue to build a legacy that is as
						enduring as it is inspiring.
					</p>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.heritage-image {
		background-image: url('/path/to/image.jpg');
		background-size: cover;
		background-position: center;
	}
</style>
