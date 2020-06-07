import ParallaxDemo from './ParallaxDemo.svelte';

const app = new ParallaxDemo({
	target: document.body,
	props: {
		name: 'Chicken'
	}
});

export default app;