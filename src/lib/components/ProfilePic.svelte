<script lang="ts">
  import { ProfilePicture, } from '$lib/icons/index.js';

  export let size: string = "normal";
</script>

<img
  src="{ProfilePicture}"
  class:small={size == "small"}
  class:large={size == "large"}
  alt="user">

<style lang="scss">
  img {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 50%;

    &.small {
      height: 2.5em;
      width: 2.5em;
    }

    &.large {
      width: 120px;
      height: 120px;
    }
  }
</style>