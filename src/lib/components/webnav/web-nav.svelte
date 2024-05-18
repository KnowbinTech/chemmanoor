<script lang="ts">
	import { cubicInOut } from "svelte/easing";
	import { crossfade } from "svelte/transition";
	import { page } from "$app/stores";
	import { webmenu } from "./webmenu";
	import { cn } from "$lib/utils.js";
	import { ScrollArea } from "$lib/components/ui/scroll-area/index.js";


	let className: string | undefined | null = undefined;
	export { className as class };

	const [send, receive] = crossfade({
		duration: 250,
		easing: cubicInOut,
	});
</script>

<div class="relative">
	<div class="lg:max-w-none">
			<div
				class={cn("mb-4 flex items-center pb-3 md:pb-0", className)}
				{...$$restProps}
			>
				{#each webmenu as webmenus, index (index)}
				{@const isActive = $page.url.pathname === webmenus.href}

					<a
						href={webmenus.href}
						data-sveltekit-noscroll
						class={cn(
							"relative flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
							isActive ? "font-medium text-primary" : "text-muted-foreground"
						)}
					>
						{#if isActive}
							<div
								class="absolute inset-0 rounded-full bg-muted"
								in:send={{ key: "activetab" }}
								out:receive={{ key: "activetab" }}
							/>
						{/if}
						<div class="relative">
							{webmenus.name}
							{#if webmenus.label}
								<span
									class="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs font-medium leading-none text-[#000000] no-underline group-hover:no-underline"
								>
									{webmenus.label}
								</span>
							{/if}
						</div>
					</a>
				{/each}
			</div>
	</div>

</div>

