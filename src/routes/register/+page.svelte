<script lang="ts">
    /** @type {import('./$types').PageData} */
    export let data;
</script>

<main>
    <h1>Register</h1>
    <form action="?/register" method="post" class="auth-form">
        <label for="">Email</label>
        <input type="text" name="email">
        <label for="">Password</label>
        <input type="password" name="password">
        
        <button type="submit" class="btn btn-primary">Register</button>
    </form>
</main>