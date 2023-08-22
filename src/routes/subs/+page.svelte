<script lang="ts">
  import { VideoCard, VideoContainer, } from "$lib/components/videocard/index.js";
  import { WaitingGif } from '$lib/icons/index.js';
  import type { Video } from '$lib/db/types';

  export let data: any;
  let videos: Video[] = data.videos;
</script>

{#if data.videos === undefined}
  <img src="{WaitingGif}" alt="WaitingGif"> Loading...
{/if}

<div>
  <VideoContainer>
    {#each videos as video}
      <VideoCard {video}/>
    {/each}
  </VideoContainer>
</div>
