<script>
  import Mountains from './Mountains.svelte'
  import Hills from './Hills.svelte'
  import Trees from './Trees.svelte'
  import Ground from './Ground.svelte'
  import Wave1 from './Wave1.svelte'
  import Wave2 from './Wave2.svelte'
  import Wave3 from './Wave3.svelte'

  const layers = [
    // { component: 'cloud-2-light.svg', layer: 0 },
    // { component: 'cloud-4-light.svg', layer: 0 },
    // { component: 'cloud-5-light.svg', layer: 0 },
    { component: Mountains, speed: 0.3 },
    // { component: 'cloud-1-dark.svg', layer: 2 },
    // { component: 'cloud-3-dark.svg', layer: 2 },
    { component: Hills, speed: 0.6 },
    { component: Trees, speed: 0.8 },
    { component: Ground, speed: 0.9 },
    { component: Wave3, speed: 0.9 },
    { component: Wave2, speed: 0.92 },
    { component: Wave1, speed: 1 },
  ]

  let y
</script>

<style>
  .parallax-container {
    background: rgb(0, 135, 213); /* 255, -41, -130*/
    background: rgb(255, 94, 33);
    background: rgb(
      calc(var(--y) / 2.75),
      calc(135 - var(--y) / 17),
      calc(213 - var(--y) / 5.4)
    );
    position: fixed;
    width: 2560px;
    height: 1000px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .foreground {
    position: absolute;
    top: 965px;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: #37559c;
    color: white;
  }

  :global(body) {
    margin: 0;
    padding: 0;
    background-color: #0087d5;
  }
</style>

<svelte:window bind:scrollY={y} />

<main class="parallax-container" style="--y: {y}">
  {#each layers as layer}
    <svelte:component
      this={layer.component}
      style="transform: translateY({-y * layer.speed}px)" />
    <!-- style="transform: translate(0, {(-y * layer.speed) / (layers.length - 1)}px" /> -->
  {/each}
</main>

<div class="foreground" />
