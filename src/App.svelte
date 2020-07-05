<script>
  import Cloud1 from './Cloud1.svelte'
  import Cloud2 from './Cloud2.svelte'
  import Cloud3 from './Cloud3.svelte'
  import Cloud4 from './Cloud4.svelte'
  import Cloud5 from './Cloud5.svelte'
  import Mountains from './Mountains.svelte'
  import Hills from './Hills.svelte'
  import Trees from './Trees.svelte'
  import WindTrail from './WindTrail.svelte'
  import Ground from './Ground.svelte'
  import Wave1 from './Wave1.svelte'
  import Wave2 from './Wave2.svelte'
  import Wave3 from './Wave3.svelte'
  import SeaFloor1 from './SeaFloor1.svelte'
  import SeaFloor2 from './SeaFloor2.svelte'
  import SeaFloor3 from './SeaFloor3.svelte'
  import Sword from './Sword.svelte'
  import Sand from './Sand.svelte'

  const layers = [
    { component: Cloud2, speed: 0.2 },
    { component: Cloud5, speed: 0.2 },
    { component: Cloud4, speed: 0.2 },
    { component: Mountains, speed: 0.3 },
    { component: Cloud1, speed: 0.3 },
    { component: Cloud3, speed: 0.3 },
    { component: Hills, speed: 0.6 },
    { component: Trees, speed: 0.8 },
    { component: WindTrail, speed: 0.7 },
    { component: Ground, speed: 0.9 },
    { component: Wave3, speed: 0.9 },
    { component: Wave2, speed: 0.92 },
    { component: Wave1, speed: 1 },
  ]

  const seaLayers = [
    { component: SeaFloor3, speed: 0.38 },
    { component: SeaFloor2, speed: 0.25 },
    { component: SeaFloor1, speed: 0.13 },
  ]

  let scrollY
  $: red = scrollY / 2.75
  $: green = 135 - scrollY / 17
  $: blue = 213 - scrollY / 5.4
</script>

<style>
  .parallax-container {
    /* This container should stay fixed and centered on viewport resize */
    position: fixed;
    width: 800px;
    height: 800px;
    left: 50%;
    transform: translate(-50%, 0);
  }

  .foreground {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    overflow: hidden;
    top: 560px;
    width: 100%;
    height: 1700px;
    background-color: #37559c;
  }

  @media screen and (min-width: 768px) {
    .parallax-container {
      width: 1200px;
      height: 900px;
    }
    .foreground {
      top: 666px;
    }
  }

  @media screen and (min-width: 1200px) {
    .parallax-container {
      width: 2560px;
      height: 1000px;
    }

    .foreground {
      top: 965px;
    }
  }
</style>

<svelte:window bind:scrollY />

<main
  class="parallax-container"
  style="background: rgb({red}, {green}, {blue})">
  {#each layers as layer}
    <svelte:component
      this={layer.component}
      {scrollY}
      style="transform: translateY({-scrollY * layer.speed}px)" />
  {/each}
</main>

<div class="foreground">
  {#each seaLayers as layer}
    <svelte:component
      this={layer.component}
      {scrollY}
      style="transform: translateY({scrollY * layer.speed}px)" />
  {/each}
  <Sword />
  <Sand />
</div>
