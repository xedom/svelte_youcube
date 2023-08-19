<script lang="ts">
  import Button from '$lib/components/Button.svelte';

  $: isLogging = true;
</script>

<div class="buttons">
  <Button onClick={() => isLogging = true}>Login</Button>
  <Button onClick={() => isLogging = false}>Register</Button>
</div>

<div class="auth">
  {#if isLogging}
    <form>
      <h1>Login</h1>
      
      <label for="username">Username</label>
      <input type="text" id="username" name="username">
      
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      
      <button>Login</button>
    </form>
  {:else}
    <form>
      <h1>Register</h1>
      
      <label for="username">Username</label>
      <input type="text" id="username" name="username">
      
      <label for="email">E-Mail</label>
      <input type="email" id="email" name="email">
      
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      
      <button>Login</button>
    </form>
  {/if}
  
</div>

<style lang="scss">
  .auth {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .buttons {
    display: flex;
    gap: 1em;
    justify-content: center;
    margin-top: 2em;
  }
  form {
    background-color: #e9e9e9;
    padding: 2em;
    align-items: center;
    gap: 0.5em;
    display: flex;
    flex-direction: column;

    input, button {
      padding: .5em;
      min-width: 300px;
    }
    button {
      cursor: pointer;
    }
  }
</style>