<script>
  export let style

  function initializeSnap() {
    const s = Snap(document.querySelector('#wind_trail'))
    const windPath = s.select('path').attr('d')
    const windPathLength = Snap.path.getTotalLength(windPath)
    const windDraw = s.path(windPath)
    windDraw.attr({
      fill: 'none',
      stroke: '#ccc',
      'stroke-dasharray': 200 + ' ' + windPathLength,
      'stroke-dashoffset': 200,
      'stroke-width': 5,
      'stroke-linecap': 'round',
      'stroke-linejoin': 'round',
      'stroke-miterlimit': 10,
    })

    setTimeout(windAnimate, 2000)
    setInterval(windAnimate, 8000)

    function windAnimate() {
      Snap.animate(
        200,
        -windPathLength,
        function(value) {
          windDraw.attr({ strokeDashoffset: value })
        },
        2000
      )
    }
  }
</script>

<style>
  svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  .cls-1 {
    fill: none;
  }
</style>

<svelte:head>
  <script src="/snap.svg-min.js" on:load={initializeSnap}>

  </script>
</svelte:head>

<svg
  {style}
  id="wind_trail"
  data-name="wind trail"
  xmlns="http://www.w3.org/2000/svg"
  width="2560"
  height="1000"
  viewBox="0 0 2560 1000">
  <path
    class="cls-1"
    d="M1644.3,559.2H1465.59a43.75,43.75,0,1,1,43.75-43.75,43.75,43.75,0,0,1-43.75,43.75h-178.7" />
</svg>
