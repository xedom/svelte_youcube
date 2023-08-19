<script lang="ts">

  export let icon: string|undefined = undefined;
  export let onClick: () => void = () => {};
  export let collapsed: boolean = false;
  export let rounded: boolean = false;
</script>

<button class:rounded={rounded} on:click="{onClick}">
  {#if icon !== undefined}
    <img src="{icon}" alt="button img">
  {/if}
  {#if collapsed === false}
    <slot />
  {/if}
</button>

<style lang="scss">
  button {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 1em;
    
    padding: 0.5em 1em;
    background-color: #f5f5f5;

    border: none;
    cursor: pointer;
    overflow: hidden;
    border-radius: 0.5em;

    &.rounded {
      border-radius: var(--radius);
    }

    &:hover {
    background-color: #b5b5b5;
    }

    img {
      width: 25px;
      height: 25px;
      object-fit: cover;
    }
  }
</style>