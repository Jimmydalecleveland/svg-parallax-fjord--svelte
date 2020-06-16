# SVG Parallax Fjord - Built with Svelte
https://svelte.parallaxfjord.com/

My first attempt at this site was built with React. Svelte has some great animation centric functionality built into the framework and it works very nicely with SVGs out of the box. I rebuilt the project to get some practice with Svelte and to compare sizes of final output.

## Some cool things about the project

- No animation library added for Parallax effects. It uses svelte's convenient window binding to sync a `scrollY` variable with everything on the page, including the background transition.
- ~~Uses CSS variables from a derived value to accomplish background transition.~~ Svelte doesn't currently allow local js variables to be used in CSS, but through this trick you can accomplish that goal.
    - I have since learned that CSS variables do not perform well when being recalculated, particularly when the element it is declared on has a lot of children. I've switched this to simple js variables that are read on the element for better performance
- Built for up to 2560px resolution.
- Uses `svelte:component` to cleanly loop over an array of objects with `component` values to make the code much more concise but also allows for easy reordering and a central place to update parallax speeds.
- SVG morphing animations for trees blowing in the wind using snap-svg.
