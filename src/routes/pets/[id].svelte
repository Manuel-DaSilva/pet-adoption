<script context="module">
    // this data will be fetched on the browser, but if page 
    // is not loaded firts will run on the client
    // always before <script>
    export async function preload(page, session) {
        
        const { id } = page.params;

        const res = await this.fetch(`pets/${id}.json`);

        const pet = await res.json();

        return { pet }
    }
</script>

<script>
    export let pet;
</script>

<style>

    .image-container {
        text-align: center;
    }
</style>

<div class="pet">
    <div class="image-container">
        <img src="https://picsum.photos/id/237/200/300" alt="dog">
    </div>
    <h2>{ pet.name }</h2>
    <p>Age: { pet.age }</p>
    <p>{ pet.description }</p>
</div>