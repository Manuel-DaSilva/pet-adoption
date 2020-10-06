<script lang="ts">
	import Nav from '../components/Nav.svelte';
	import Footer from '../components/footer.svelte';

	export let segment: string;
</script>

<style>
	main {
		position: relative;
		max-width: 960px;
		padding: 60px 10px;
		margin: 0 auto;
	}
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>

<Footer/>
