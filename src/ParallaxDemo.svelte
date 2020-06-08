<script>
  const layers = [
    { fileName: 'cloud-2-light.svg', layer: 0 },
    { fileName: 'cloud-4-light.svg', layer: 0 },
    { fileName: 'cloud-5-light.svg', layer: 0 },
    { fileName: 'mountains.svg', layer: 1 },
    { fileName: 'cloud-1-dark.svg', layer: 2 },
    { fileName: 'cloud-3-dark.svg', layer: 2 },
    { fileName: 'hills.svg', layer: 3 },
    { fileName: 'trees.svg', layer: 4 },
    { fileName: 'ground.svg', layer: 5 },
    { fileName: 'wave-3.svg', layer: 6 },
    { fileName: 'wave-2.svg', layer: 7 },
    { fileName: 'wave-1.svg', layer: 8 },
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

  .parallax-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    will-change: transform;
  }

  .parallax-container img:last-child::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: rgb(45, 10, 13);
  }

  .text {
    position: relative;
    width: 100%;
    height: 300vh;
    color: rgb(220, 113, 43);
    text-align: center;
    padding: 4em 0.5em 0.5em 0.5em;
    box-sizing: border-box;
    pointer-events: none;
  }

  span {
    display: block;
    font-size: 1em;
    text-transform: uppercase;
    will-change: transform, opacity;
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
    <img
      src="assets/{layer.fileName}"
      alt={layer.fileName}
      style="transform: translate(0, {(-y * layer.layer) / (layers.length - 1)}px" />
  {/each}
</main>

<div class="text">
  <span style="opacity: {1 - Math.max(0, y / 40)}">scroll down</span>

  <div class="foreground" />
</div>
