<script context="module">
    // this data will be fetched on the browser, but if page 
    // is not loaded firts will run on the client
    // always before <script>
    export async function preload(page, session) {
        const res = await this.fetch('/pets.json');
        const pets = await res.json();

        return { pets };
    }
</script>

<script>
    export let pets;
</script>

<h1>pets</h1>
<ul>
    {#each pets as pet}
    <li><a href="/">{pet.name}</a></li>
    {/each}
</ul>