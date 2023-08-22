<script lang="ts">
  import { ProfilePicture, } from '$lib/icons/index.js';

  export let size: string = "normal";
  export let pic: string|undefined = undefined;
</script>

{#if pic}
  <img
    src="{pic}"
    class:small={size == "small"}
    class:large={size == "large"}
    alt="user">
{:else}
  <img
    src="{ProfilePicture}"
    class:small={size == "small"}
    class:large={size == "large"}
    alt="user">
{/if}

<style lang="scss">
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;

    &.small {
      height: 2.5rem;
      width: 2.5rem;
    }

    &.large {
      width: 120px;
      height: 120px;
    }
  }
</style>
