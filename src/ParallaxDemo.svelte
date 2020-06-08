<script>
  import Mountains from './Mountains.svelte'
  import Hills from './Hills.svelte'
  import Trees from './Trees.svelte'
  import Ground from './Ground.svelte'

  const layers = [
    // { component: 'cloud-2-light.svg', layer: 0 },
    // { component: 'cloud-4-light.svg', layer: 0 },
    // { component: 'cloud-5-light.svg', layer: 0 },
    { component: Mountains, layer: 1 },
    // { component: 'cloud-1-dark.svg', layer: 2 },
    // { component: 'cloud-3-dark.svg', layer: 2 },
    { component: Hills, layer: 3 },
    { component: Trees, layer: 4 },
    { component: Ground, layer: 5 },
    // { component: 'wave-3.svg', layer: 6 },
    // { component: 'wave-2.svg', layer: 7 },
    // { component: 'wave-1.svg', layer: 8 },
  ]

  let y
</script>

<style>
  .parallax-container {
    position: fixed;
    width: 2400px;
    height: 900px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .parallax-container img:last-child::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(45, 10, 13);
  }

  .foreground {
    position: absolute;
    top: 2000px;
    left: 0;
    width: 100%;
    height: calc(100% - 712px);
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

<main class="parallax-container">
  {#each layers as layer}
    <svelte:component
      this={layer.component}
      style="transform: translate(0, {(-y * layer.layer) / (layers.length - 1)}px" />
  {/each}
</main>

<div class="foreground" />
