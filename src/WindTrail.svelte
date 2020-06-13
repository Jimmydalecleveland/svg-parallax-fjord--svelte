<script>
  export let style
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
    stroke: #ccc;
    stroke-width: 3;
    stroke-dasharray: 632;
    stroke-dashoffset: 632;
    animation: windBlow 8s cubic-bezier(0.55, 0.09, 0.68, 0.53) 3s infinite;
  }

  @keyframes windBlow {
    20%,
    100% {
      stroke-dashoffset: -632;
    }
  }
</style>

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
