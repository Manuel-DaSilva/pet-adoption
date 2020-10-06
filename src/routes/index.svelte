<script>
	import { onMount } from 'svelte';

	// this runs only on the client, not on the server
	onMount(() => {
		// safe browser only code 
	});

    console.log('home');
</script>

<style>
	h1, p {
		text-align: center;
		margin: 0 auto;
	}
	h1 {
		font-size: 2em;
		text-transform: uppercase;
		font-weight: 700;
		margin: 0 0 0.5em 0;
	}
	img {
		width: 200px;
		margin: 0 auto;
		display: block;
	}
	a {
		margin-top: 60px;
		text-align: center;
	}
	div {
		margin-top: 60px;
		text-align: center;
	}
	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<div>
	<img src="no-text-logo.png" alt="logo">
	<h1>Adopt a pet</h1>
	<p>Find your next partner right here</p>
	<a href="pets">View pets</a>
</div>
