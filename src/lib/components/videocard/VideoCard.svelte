<script lang="ts">
  // { user: any, thumbnail: any, title: any, views: any, data: any }
  import { parseTimestampFromNow, parseTime, parseViews } from '$lib/utils/index';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import type { Video } from '$lib/db/types';

  export let video: Video;
</script>

<a class="card" href={`/video/${video?.id}`}>
  <div class="preview">
    <img src="{video?.thumbnail}" alt="video thumbnail">
    <span class="time">{parseTime(video?.duration)}</span>
  </div>
  <div class="bottom">
    <a class="user" href="{'/user/'+video?.user?.id}">
      <ProfilePic size={"small"} pic={video?.user?.avatar}></ProfilePic>
    </a>
    <div class="right">
      <div class="title">{video?.title}</div>
      <a class="username" href="{'/user/'+video?.user?.id}">{video?.user?.name}</a>
      <div class="info">
        <div class="views">{parseViews(video?.views)} Views</div>
        <div class="date">{parseTimestampFromNow(video?.timestamp)}</div>
      </div>
    </div>
  </div>
</a>

<style lang="scss">
  a {
    align-items: stretch;
    text-decoration: none;
    color: inherit;
    cursor: pointer;
    display: flex;
    // max-width: 350px;
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
