<script lang="ts">
  import {
    VideoCard, VideoContainer,
    VerticalVideoCard, VerticalVideoContainer
  } from "$lib/components/videocard/index.js";
  import { WaitingGif } from '$lib/icons/index.js';

  import Button from '$lib/components/Button.svelte';
  import Modal, { getModal } from '$lib/components/Modal.svelte';

  export let data: any;
  let videos = data.videos;
  const { sponsored_videos, shorts_videos, new_videos, films_videos, random_videos } = videos;
</script>

<Modal id='short-modal'>
	<h1>Shorts</h1>
  <div class="modalButtons">
    <Button onClick={()=>getModal('short-modal').close()}>Cancel</Button>
  </div>
</Modal>

<div class="buttons">
  <Button>All</Button>
  <Button>News</Button>
  <Button>Music</Button>
  <Button>Movies</Button>
</div>

{#if data.videos === undefined}
  <img src="{WaitingGif}" alt="WaitingGif"> Loading...
{/if}

<div class="sponsored">
  <VideoContainer>
    {#each sponsored_videos as video}
      <VideoCard videoData={video}/>
    {/each}
  </VideoContainer>
</div>

<hr>
<h2>Shorts</h2>
<div class="shorts">
  <VerticalVideoContainer>
    {#each shorts_videos as video}
      <VerticalVideoCard on:click={()=>getModal('short-modal').open()} {video}/>
    {/each}
  </VerticalVideoContainer>
</div>

<hr>

<div class="new">
  <VideoContainer>
    {#each new_videos as video}
      <VideoCard videoData={video}/>
    {/each}
  </VideoContainer>
</div>

<hr>

<div class="films">
  <VerticalVideoContainer>
    {#each films_videos as video}
      <VerticalVideoCard on:click={()=>getModal('short-modal').open()} {video}/>
    {/each}
  </VerticalVideoContainer>
</div>

<hr>

<div class="random">
  <VideoContainer>
    {#each random_videos as video}
      <VideoCard videoData={video}/>
    {/each}
  </VideoContainer>
</div>

<style lang="scss">
  .buttons {
    display: flex;
    padding: 0.5em;
    gap: 0.5em;
  }
</style>
