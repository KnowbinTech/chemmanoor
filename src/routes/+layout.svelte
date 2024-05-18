<script lang="ts">
	import '../app.css';
    import Nav from "./Nav.svelte"
    import Footer from "./Footer.svelte"
    import  GradientAnimation from '$lib/components/ui/gradient-animation/GradientAnimation.svelte';
    import Bubble from '$lib/components/bubble.svelte';
    import { onMount } from 'svelte';

    interface BubbleProps {
    size: number;
    color: string;
    blur: number;
    speed: number;
    x: number;
    y: number;
  }
  let bubbles: BubbleProps[] = [];
  const numBubbles = 10;

  function randomizeBubble(): BubbleProps {
    return {
      size: Math.random() * 500,
      color: `hsla(${Math.random() * 360}, 100%, 50%, 0.5)`,
      blur: Math.random() * 100 +50,
      speed: Math.random() * 10 + 100,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight
    };
  }

  onMount(() => {
    for (let i = 0; i < numBubbles; i++) {
      bubbles.push(randomizeBubble());
    }

    const moveBubbles = () => {
      bubbles = bubbles.map(bubble => ({
        ...bubble,
        x: (bubble.x + bubble.speed * (Math.random() < 0.5 ? -1 : 1)) % window.innerWidth,
        y: (bubble.y + bubble.speed * (Math.random() < 0.5 ? -1 : 1)) % window.innerHeight
      }));
    };

    const interval = setInterval(moveBubbles, 100); // Adjust interval for more frequent updates

    return () => {
      clearInterval(interval);
    };
  });
</script>
<style>
    .background {
      position: fixed;
      opacity: 0.5; /* Changed from absolute to fixed */
      top: 0;
      left: 0;
      width: 100vw; /* Ensure it covers the full viewport width */
      height: 100vh; /* Ensure it covers the full viewport height */
      z-index: -1; /* Ensures the bubbles are in the background */
      pointer-events: none; /* Makes the background non-interactive */
    }
  </style>

<div class="background">
    {#each bubbles as bubble}
      <Bubble {...bubble} />
    {/each}
  </div>
<Nav />

<slot></slot>


<Footer />

