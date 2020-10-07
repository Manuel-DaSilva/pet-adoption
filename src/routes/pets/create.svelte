<script>

    import { goto } from '@sapper/app';

    let name;
    let age;
    let description;

    const handleSubmit = async () => {
        if (name && age && description) {
            const res = await fetch('pets.json', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, age, description })
            });
            goto('pets');
        }
    }
</script>

<style>
    h2{
        text-align: center;
    }
    form {
        max-width: 360px;
        margin: 40px auto;
        text-align: center;
    }
    input, textarea {
        display: block;
        width: 100%;
        padding: 10px;
        font-family: arial;
        margin: 10px auto;
        border: 1px solid #eee;
        border-radius: 8px;
    }
</style>

<h2>Add a New pet</h2>

<form on:submit|preventDefault="{handleSubmit}">
    <input type="text" placeholder="Pet name" bind:value={name} required>
    <input type="number" placeholder="Age" bind:value={age} required>
    <textarea placeholder="Pet drescription" bind:value={description} required></textarea>
    <button class="btn">Add new pet</button>
</form>
