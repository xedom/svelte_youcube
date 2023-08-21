<script lang="ts">
  import { DragIcon, RemoveIcon, } from '$lib/icons/index.js';
  import Button from '$lib/components/Button.svelte';
  import type { Video } from "$lib/db/types";
  import { parseViews, parseTimestampFromNow } from '$lib/utils/index';

  export let video: Video;
</script>

<div class="video" draggable="true" id="{video.id.toString()}"
  on:dragenter on:drag on:drop on:dragover
  >
  <!-- <Button icon="{DragIcon}" /> -->
  <img class="dragicon" src="{DragIcon}" alt="dragicon" draggable="false">
  <img class="preview" src="{video.thumbnail}" alt="video" draggable="false">
  <div class="info">
    <h3 class="title">{video.id}. {video.title}</h3>
    <span>
      <span class="user">{video.user?.username}</span> |
      <span class="views">{parseViews(video.views)} Views</span> |
      <span class="date">{parseTimestampFromNow(video.timestamp)}</span>
    </span>
  </div>
  <!-- <Button icon="{RemoveIcon}"></Button> -->
</div>

<style lang="scss">
  .video {
    // flex: 1;
    display: flex;
    margin: 0 .5em .5em .5em;
    padding: .25em 0.5em;
    // align-items: center;
    background-color: #f5f5f5;
    border-radius: var(--radius);
    // padding: 0 1em;
    gap: 0.5em;

    .info { flex: 1; }

    &:hover {
      cursor: pointer;
      background-color: #e9e9e9;
    }

    img.preview {
      width: 160px;
      height: 100px;
      border-radius: var(--radius);
    }

    img.dragicon {
      cursor: grab;
      align-self: center;
      width: 2em;
      height: 2em;
    }
  }
</style>