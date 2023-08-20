<script lang="ts">
  import type { ActionData } from './$types';
  import Button from '$lib/components/Button.svelte';

  $: isLogging = true;

  const onClickLogin = () => {
    isLogging = true;
    form = null;
  };
  const onClickRegister = () => {
    isLogging = false;
    form = null;
  };


  export let form: ActionData;
</script>

<div class="buttons">
  <Button onClick={onClickLogin}>Login</Button>
  <Button onClick={onClickRegister}>Register</Button>
</div>

<div class="auth">

  {#if form?.isLogging ?? isLogging}
    <form method="post" action="?/login">
      <h1>Login</h1>
      
      <label for="username">Username</label>
      <input type="text" id="username" name="username">
      
      <label for="password">Password</label>
      <input type="password" id="password" name="password">
      
      <button>Login</button>
    </form>
  {:else}
    <form method="post" action="?/register">
      <h1>Register</h1>
      
      <label for="username">Username</label>
      <input type="text" id="username" name="username" value={form?.username ?? ''}>
      
      <label for="email">E-Mail</label>
      <input type="text" id="email" name="email" value={form?.email ?? ''}>
      
      <label for="password">Password</label>
      <input type="password" id="password" name="password" value={form?.password ?? ''}>
      
      <button>Register</button>
    </form>
  {/if}
  
  {#if form?.success}
    <div class="success">{form?.success}</div>
  {/if}
  {#if form?.error}
    <div class="error">{form?.error}</div>
  {/if}
</div>

<style lang="scss">
  .success {
    padding: 0.25em 2em;
    background-color: #00ff66;
    border-radius: var(--radius);
    margin-top: 0.5em;
  }
  .error {
    padding: 0.25em 2em;
    background-color: #ff6655;
    border-radius: var(--radius);
    margin-top: 0.5em;
  }

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