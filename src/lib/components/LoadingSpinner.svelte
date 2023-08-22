<script lang="ts">
  import { CatDancingGif, EpicDanceGif } from "$lib/icons";

  export let loadingFailed: Boolean = false;
</script>

<div class="loading">
  {#if !loadingFailed}
    <img src="{CatDancingGif}" alt="CatDancingGif">
    <p>loading...</p>
  {:else}
    <img src="{EpicDanceGif}" alt="CatDancingGif">
    <p>loading failed</p>
  {/if}
</div>

<style>
  .loading {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 5rem;
  }
</style>
