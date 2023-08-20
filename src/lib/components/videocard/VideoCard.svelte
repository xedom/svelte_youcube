<script lang="ts">
  // { user: any, thumbnail: any, title: any, views: any, data: any }
  import { parseTimestampFromNow, parseTime, parseViews } from '$lib/utils/index';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import type { Video } from '$lib/db/types';

  export let videoData: Video;
</script>

<a class="card" href={`/video/${videoData?.id}`}>
  <div class="preview">
    <img src="{videoData?.thumbnail}" alt="video thumbnail">
    <span class="time">{parseTime(videoData?.duration)}</span>
  </div>
  <div class="bottom">
    <div class="user">
      <!-- <img src="{videoData?.user?.avatar}" alt="user"> -->
      <ProfilePic size={"small"} pic={videoData?.user?.avatar}></ProfilePic>
    </div>
    <div class="right">
      <div class="title">{videoData?.title}</div>
      <div class="username">{videoData?.user?.name}</div>
      <div class="info">
        <div class="views">{parseViews(videoData?.views)} Views</div>
        <div class="date">{parseTimestampFromNow(videoData?.timestamp)}</div>
      </div>
    </div>
  </div>
</a>

<style lang="scss">
  a.card {
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    width: 350px;
    flex-direction: column;
    border-radius: var(--radius);
    gap: 0.5em;

    .preview {
      position: relative;
      border-radius: var(--radius);
      overflow: hidden;
      height: 200px;

      img {
        display: inline-block;
        height: 100%;
        width: 100%;
        object-fit: cover;
      }

      .time {
        font-size: 0.8em;
        position: absolute;
        border-radius: var(--radius);
        padding: 0.25em 0.5em;
        background-color: black;
        color: #ffffff;
        bottom: 5px;
        right: 5px;
      }
    }

    .title {
      font-weight: 600;
    }

    .bottom {
      display: flex;
      width: 100%;
      gap: 0.5em;
    }

    .right {
      width: 100%;
    }

    .info {
      display: flex;
      width: 100%;
      flex-direction: row;
      gap: 1em;
      font-size: 0.8em;
    }

    .username {
      font-size: 0.8em;
    }
  }
</style>