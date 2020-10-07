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

<style>
    ul{
        padding: 0;
    }
    li {
        list-style-type: none;
    }
    li a {
        display: block;
        padding: 15px;
        border: 1px solid #f2f2f2;
        border-radius: 8px;
        margin: 10px auto;
        text-decoration: none;
    }
    li a:hover {
        background: #fbfbfb;
    }
    div {
        text-align: center;
    }
</style>

<h1>Pets</h1>

<ul>
    {#each pets as pet}
    <li><a rel=prefetch href={`pets/${pet.id}`} >{pet.name}</a></li>
    {/each}
</ul>

<div>
    <a rel=prefetch href="/pets/create" class="btn">Add a new pet</a>
</div>