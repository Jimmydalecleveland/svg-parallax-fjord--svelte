<script>
  let isSwordFree = false

  const freeSword = () => {
    isSwordFree = true
    new Promise(resolve => {
      setTimeout(resolve, 3300)
    }).then(
      () =>
        (window.location.href =
          'https://blog.jimmydc.com/?source=parallaxfjord')
    )
  }
</script>

<style>
  .animator {
    position: absolute;
    bottom: -20px;
    cursor: pointer;
  }

  .animator.sword-free {
    animation: freeSword 3s linear forwards;
  }

  .animator.sword-free > svg {
    animation: swingSword 3s linear forwards;
  }

  svg {
    transform-origin: bottom;
    transform: rotate(-7deg);
  }

  @keyframes freeSword {
    27% {
      transform: translate(0);
      animation-timing-function: cubic-bezier(0.9, 0.03, 0.69, 0.22);
    }
    /* freeing sword from sand */
    35% {
      transform: translate(0, -30%);
    }
    80% {
      transform: translate(0, -35%);
    }
    100% {
      transform: translate(0, -30%);
    }
  }

  @keyframes swingSword {
    5% {
      transform: rotate(-4deg);
      animation-timing-function: linear;
    }
    10% {
      transform: rotate(-8deg);
      animation-timing-function: linear;
    }
    15% {
      transform: rotate(-5deg);
      animation-timing-function: linear;
    }
    20% {
      transform: rotate(-9deg);
    }
    /* freeing sword from sand */
    25% {
      transform: rotate(0);
    }
    80% {
      transform: rotate(0);
      animation-timing-function: cubic-bezier(0.9, 0.03, 0.69, 0.22);
    }
    100% {
      transform-origin: top;
      transform: rotate(189deg);
    }
  }

  .cls-1 {
    fill: #ccc;
  }

  .cls-2 {
    fill: #8e8e8e;
  }

  .cls-3 {
    fill: #e2b034;
  }

  .cls-4 {
    fill: #3e1889;
  }

  .cls-5 {
    fill: #5135a8;
    opacity: 0.97;
  }

  .cls-6 {
    fill: #727272;
  }

  .cls-6,
  .cls-9 {
    stroke: #170f42;
    stroke-miterlimit: 10;
    stroke-width: 0.5px;
  }

  .cls-7 {
    fill: #f2d48f;
  }

  .cls-8 {
    fill: #e5a117;
  }

  .cls-9 {
    fill: #498791;
  }

  .cls-10 {
    fill: #f4ba51;
  }

  .cls-11 {
    fill: #fff;
  }
</style>

<div
  class={isSwordFree ? 'animator sword-free' : 'animator'}
  on:click|once={freeSword}>
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    width="70"
    viewBox="0 0 85.65 454.2">
    <g>
      <polyline
        class="cls-1"
        points="43.47 454.2 47.92 437.09 51.54 109.05 43.36 109.06" />
      <polyline
        class="cls-2"
        points="43.47 454.2 39 437.09 35.18 109.06 43.36 109.06" />
      <path
        class="cls-3"
        d="M47.77,91.9V86A32.06,32.06,0,0,0,79.7,53.85C79.69,41.4,70,29.06,63.09,25.7c-6.16-3-10.43-5.63-9.36-12.51.47-3,4.3-9.4,11.17-7.13,2.8.93,2.64,2.23,2.57,3.24-.11,1.47-1.26,2.53-3.08,2.69s-3.82-1.91-4.88-1.72-2.24,1.19-2.23,3.23c0,3.31,1.2,4.92,8.52,8.06,9.84,4.23,19.84,18,19.85,32.29A38,38,0,0,1,47.77,91.9Z" />
      <path
        class="cls-3"
        d="M53,8.18A9.21,9.21,0,0,0,43.33,0a9.21,9.21,0,0,0-9.67,8.19c4.46,4.46,6,7.43,5.21,16.36H47.8C47.05,15.62,48.54,12.64,53,8.18Z" />
      <path
        class="cls-4"
        d="M47,26.1l-8,.1c0,.19-1.39,4.36-1,5.81a19.86,19.86,0,0,0-.57,4.77A19.36,19.36,0,0,0,38,41.55a19.95,19.95,0,0,0,0,9.55,19.95,19.95,0,0,0,0,9.55,19.31,19.31,0,0,0-.57,4.77A19.86,19.86,0,0,0,38,70.19,19.86,19.86,0,0,0,37.4,75,19.44,19.44,0,0,0,38,79.74a19.36,19.36,0,0,0-.58,4.77c0,6.16,2.67,11.16,6,11.16v5.39c3.28,0,6-5,5.94-11.16a19.36,19.36,0,0,0-.58-4.77,19.95,19.95,0,0,0,0-9.55,19.9,19.9,0,0,0,0-9.54,19.38,19.38,0,0,0,.58-4.78,20.36,20.36,0,0,0-.58-4.77,19.86,19.86,0,0,0,.57-4.77A19.3,19.3,0,0,0,48.71,47a19.95,19.95,0,0,0,0-9.55,19.36,19.36,0,0,0,.58-4.77A12.15,12.15,0,0,0,47,26.1Z" />
      <path
        class="cls-5"
        d="M48.71,37.4a19.36,19.36,0,0,0,.58-4.77A12.15,12.15,0,0,0,47,26.1l-1.67,0,0,74.3c2.31-1.53,4-5.65,4-10.52a19.36,19.36,0,0,0-.58-4.77,19.95,19.95,0,0,0,0-9.55,19.9,19.9,0,0,0,0-9.54,19.38,19.38,0,0,0,.58-4.78,20.36,20.36,0,0,0-.58-4.77,19.86,19.86,0,0,0,.57-4.77A19.3,19.3,0,0,0,48.71,47a19.95,19.95,0,0,0,0-9.55Z" />
      <line class="cls-6" x1="37.96" y1="32.01" x2="47.75" y2="28.23" />
      <path
        class="cls-7"
        d="M53,8.18A9.21,9.21,0,0,0,43.33,0V24.55H47.8C47.05,15.62,48.54,12.64,53,8.18Z" />
      <rect
        class="cls-8"
        x="38.22"
        y="24.27"
        width="10.24"
        height="4.27"
        rx="0.62" />
      <line class="cls-9" x1="37.98" y1="79.74" x2="48.72" y2="75.58" />
      <line class="cls-9" x1="37.97" y1="70.19" x2="48.72" y2="66.04" />
      <line class="cls-9" x1="37.97" y1="60.65" x2="48.72" y2="56.49" />
      <line class="cls-9" x1="37.97" y1="51.1" x2="48.71" y2="46.95" />
      <line class="cls-9" x1="37.97" y1="41.55" x2="48.71" y2="37.4" />
      <path
        class="cls-3"
        d="M43.36,113.52a29,29,0,0,0,29-29l-58,0A29,29,0,0,0,43.36,113.52Z" />
      <path class="cls-7" d="M43.35,84.51v29a29,29,0,0,0,29-29Z" />
      <path
        class="cls-10"
        d="M48,24.27H43.33v4.27H48a.46.46,0,0,0,.46-.46V24.73A.47.47,0,0,0,48,24.27Z" />
      <path
        class="cls-7"
        d="M76.08,29.5,70.69,32a38.13,38.13,0,0,1,8.31,16l5.52-2.52A40.53,40.53,0,0,0,76.08,29.5Z" />
      <path
        class="cls-11"
        d="M75.48,38.88c.46.84.9,1.69,1.3,2.57L82.15,39c-.4-.87-.84-1.72-1.29-2.56Z" />
      <path
        class="cls-7"
        d="M85,47.4,79.39,50a26.93,26.93,0,0,1,.3,3.48l5.8-2.66A32.44,32.44,0,0,0,85,47.4Z" />
      <path
        class="cls-7"
        d="M85.58,51.88l-5.9,2.7q0,.7-.06,1.41l6-2.75C85.62,52.79,85.6,52.33,85.58,51.88Z" />
      <circle class="cls-7" cx="65.42" cy="8.13" r="1.27" />
    </g>
  </svg>
</div>
