<script lang="ts">
  import pic3 from "$lib/img/3.jpg";
  import Button from '$lib/components/Button.svelte';
  import { PlayListVideoCard } from '$lib/components/videocard';
  import type { Video } from "$lib/db/types";
    import { goto } from "$app/navigation";

  export let data: any;
  $: videos = data.videos;

  let dragged_video: Video|undefined = undefined;
  let dropover_id: number|undefined = undefined;

  function onDropOver(e: DragEvent) {
    e.preventDefault();
    const target = e.target as HTMLButtonElement;
    const vid_id = target.getAttribute('id');
    if (vid_id == null || dragged_video?.id == parseInt(vid_id)) return;
    dropover_id = parseInt(vid_id);
  }

  function onDrag(e: DragEvent) {
    const target = e.target as HTMLButtonElement;
    const drag_element_id = target.getAttribute('id');
    const video = videos.find((v: any) => v.id == drag_element_id);
    if (video) dragged_video = video;
    // console.log('onDrag', drag_element_id, video, videos);
    e?.dataTransfer?.setData("text", drag_element_id??'');
  }

  function onDrop(e: DragEvent) {
    const target = e.target as HTMLButtonElement;
    // const drag_element_id = target.getAttribute('id');
    // ev.preventDefault();
    // console.log('onDrop', dragged_video?.id, ">>", target);
    if (dropover_id == undefined || dragged_video == undefined) return;

    const dragged_video_index = videos.findIndex((v: any) => v.id == dragged_video?.id);
    const dropover_video_index = videos.findIndex((v: any) => v.id == dropover_id);
    if (dragged_video_index == -1 || dropover_video_index == -1) return;

    if (!dragged_video) return
    let new_videos = [...videos];
    new_videos.splice(dragged_video_index, 1);
    new_videos.splice(dropover_video_index, 0, dragged_video);
    videos = new_videos;

    dragged_video = undefined;
    dropover_id = undefined;
  }
</script>

<div class="playlist">
  <div class="summary">
    <img class="bg" src="{pic3}" alt="">
    <img class="preview" src="{pic3}" alt="">

    <h1>Watchlater</h1>
    <p>Created by Pingu</p>

    <div class="buttons">
      <Button>Share</Button>
      <Button on:click={ () => goto(`/video/${videos[0].id}?playlist=1`) }>Play</Button>
      <Button on:click={ () => goto(`/video/${videos[Math.floor(Math.random()*videos.length)].id}?playlist=1`) }>Play Randomly</Button>
    </div>
  </div>
  <div id="videos" class="videos">
    {#each videos as video (video.id)}
      <PlayListVideoCard {video} user={video?.user}
        on:drag={onDrag}
        on:drop={onDrop}
        on:dragover={onDropOver}
      />
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
    background: linear-gradient(transparent 66%, rgba(255, 255, 255, 0.9));

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
</style>
