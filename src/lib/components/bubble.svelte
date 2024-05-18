<script lang="ts">
    export let size;
    export let color;
    export let blur;
    export let speed;
    export let x;
    export let y;
  </script>
  
  <div class="bubble" style={`width: ${size}px; height: ${size}px; background-color: ${color}; filter: blur(${blur}px); transition: transform ${speed}s linear; transform: translate(${x}px, ${y}px);`}></div>
  
  <style>
    .bubble {
      position: absolute;
      border-radius: 50%;
    }
  </style>