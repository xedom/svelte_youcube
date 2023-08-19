<script lang="ts">
  import pic3 from "$lib/img/3.jpg";
  import Button from '$lib/components/Button.svelte';

  const vids = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]

  import { DragIcon, RemoveIcon, } from '$lib/icons/index.js';
</script>

<div class="playlist">
  <div class="summary">
    <img class="bg" src="{pic3}" alt="">

    <img class="preview" src="{pic3}" alt="">

    <h1>Watchlater</h1>
    <h3>Pingu</h3>
  
    <div class="buttons">
      <Button>Share</Button>
      <Button>Play</Button>
      <Button>Play Randomly</Button>
    </div>
  </div>
  <div class="videos">
    {#each vids as vid}
      <div class="video">
        <Button icon="{DragIcon}"></Button>
        <img class="video-preview" src="{pic3}" alt="video">
        <div class="info">
          <h2 class="title">video title</h2>
          <span>
            <span class="user">pingu</span> |
            <span class="views">223 views</span> |
            <span class="date">22 Sept</span>
          </span>
        </div>
        <Button icon="{RemoveIcon}"></Button>
      </div>
    {/each}
  </div>
</div>

<style lang="scss">
  .playlist {
    display: flex;
    flex-direction: row;
    height: 100%;
  }
  .summary {
    height: 100%;
    position: relative;
    padding: 2em;
    border-radius: var(--radius);
    // background-color: aquamarine;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 1em;

    .buttons {
      display: flex;
      gap: 0.5em;
    }

    img.bg {
      z-index: -1;
      top: 0;
      left: 0;
      object-fit: cover;
      position: absolute;
      height: 100%;
      filter: blur(40px);
    }

    img.preview {
      width: 300px;
      border-radius: var(--radius);
    }
  }
  .videos {
    flex: 1;
    flex-direction: row;
    overflow: auto;
    // padding: 0 0.5em;
  }
  .video {
    // flex: 1;
    display: flex;
    margin: 0 .5em .5em .5em;
    padding: .25em;
    // align-items: center;
    background-color: #f5f5f5;
    border-radius: var(--radius);
    // padding: 0 1em;
    gap: 1em;

    .info {
      flex: 1;
    }

    &:hover {
      cursor: pointer;
      background-color: #e9e9e9;
    }

    img.video-preview {
      width: 130px;
      border-radius: var(--radius);
    }
  }
</style>