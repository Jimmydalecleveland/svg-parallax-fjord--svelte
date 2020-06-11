# SVG Parallax Fjord - Built with Svelte

My first attempt at this site was built with React. Svelte has some great animation centric functionality built into the framework and it works very nicely with SVGs out of the box. I rebuilt the project to get some practice with Svelte and to compare sizes of final output.

## Some cool things about the project

- No animation library added for Parallax effects. It uses svelte's convenient window binding to sync a `scrollY` variable with everything on the page, including the background transition.
- Uses CSS variables from a derived value to accomplish background transition. Svelte doesn't currently allow local js variables to be used in CSS, but through this trick you can accomplish that goal.
- Built for up to 2560px resolution.
