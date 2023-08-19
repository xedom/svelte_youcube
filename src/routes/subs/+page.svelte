<script lang="ts">
  import pic3 from "$lib/img/3.jpg";
  import Button from '$lib/components/Button.svelte';
  import {
    VideoCard, VideoContainer,
  } from "$lib/components/videocard/index.js";

  const vids = [0,1,2,3,4,5,6,7,8,9,0,1,2,3,4,5,6,7,8,9]

  import { DragIcon, RemoveIcon, } from '$lib/icons/index.js';
</script>

<div class="sponsored">
  <VideoContainer>
    {#each vids as video}
      <VideoCard videoData={video}/>
    {/each}
  </VideoContainer>
</div>