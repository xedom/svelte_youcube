<script lang="ts">
  import { DragIcon, RemoveIcon, } from '$lib/icons/index.js';
  import type { Video, User } from "$lib/db/types";
  import { parseViews, parseTimestampFromNow } from '$lib/utils/index';

  export let video: Video;
  export let user: User;
</script>

{#if video && user}
  <a class="video" draggable="true" id="{video.id.toString()}"
    href="{'/video/'+video.id}"
    on:dragenter on:drag on:drop on:dragover
    >
    <!-- <Button icon="{DragIcon}" /> -->
    <img class="dragicon" src="{DragIcon}" alt="dragicon" draggable="false">
    <img class="preview" src="{video.thumbnail}" alt="video" draggable="false">
    <div class="info">
      <h3 class="title">{video.id}. {video.title}</h3>
      <span>
        <a class="user" href="/user/{user.id}">{video.user?.username}</a> |
        <span class="views">{parseViews(video.views)} Views</span> |
        <span class="date">{parseTimestampFromNow(video.timestamp)}</span>
      </span>
    </div>
    <!-- <Button icon="{RemoveIcon}"></Button> -->
  </a>
{/if}

<style lang="scss">
  a {
    text-decoration: none;
    color: inherit;
  }

  .video {
    // flex: 1;
    display: flex;
    margin: 0 .5rem .5rem .5rem;
    padding: .25rem 0.5rem;
    // align-items: center;
    background-color: #f5f5f5;
    border-radius: var(--radius);
    // padding: 0 1rem;
    gap: 0.5rem;

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
      width: 2rem;
      height: 2rem;
    }
  }
</style>
