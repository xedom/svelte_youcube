<script lang="ts">
  import { parseViews } from '$lib/utils/index';
  import type { Video } from '$lib/db/types';

  export let videoData: Video;
</script>

<div class="card-vertical">
  <img src="{videoData?.thumbnail}" alt="short img">
  <div class="info">
    <!-- <div class="duration">{videoData.duration}</div> -->
    <div class="title">{videoData?.title}</div>
    <div class="views">{parseViews(videoData?.views)}</div>
  </div>
</div>

<style lang="scss">
  .card-vertical {
    flex: none;
    cursor: pointer;
    position: relative;
    border-radius: var(--radius);
    height: 400px;
    width: 250px;
    overflow: hidden;
    margin: 0.5em 0;
    
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    
    .info {
      font-size: 0.9em;
      position: absolute;
      bottom: 0;
      color: #ffffff;
      padding: 0.5em;
      width: 100%;
      text-shadow: 2px 2px 6px black;
      background: linear-gradient(transparent 12%, rgba(0, 0, 0, 0.9));
    }
  }
</style>