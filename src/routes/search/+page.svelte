<script lang="ts">
  import { onMount, onDestroy } from "svelte";
  import { parseTimestampFromNow, parseTime, parseViews } from '$lib/utils/index';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import type { Video } from "$lib/db/types";
  import LoadingSpinner from "$lib/components/LoadingSpinner.svelte";

  let fetchPromise: Promise<void> = Promise.resolve();

  export let data;
  let videos: Video[] = data.videos;
	let vidEl: any;
  let scrollListener: any;


	async function loadMore(): Promise<void> {
    const countOfVideosToLoad = 5;
    const skip = videos.length;
    const url = `/api/videos?count=${countOfVideosToLoad}&skip=${skip}`;

    const res = await fetch(url);
    const data = await res.json();
    const newVideos = data.videos;

    // videos = [...videos, ...newVideos];
    return await new Promise(async (resolve) => {
      setTimeout(() => {
        videos = [...videos, ...newVideos];
        resolve()
      }, 2000);
    });
	}

  const onScroll = () => {
    if (vidEl.scrollTop + vidEl.clientHeight >= vidEl.scrollHeight) {
      fetchPromise = loadMore();
    }
  };

	onMount(() => {
		if (vidEl) scrollListener = vidEl.addEventListener("scroll", onScroll);
	});

	onDestroy(() => {
		if (vidEl) vidEl.removeEventListener("scroll", scrollListener);
	});
</script>

<h1>Search result</h1>
<div class="searchResult" bind:this={vidEl}>
  {#if videos}
    {#each videos as video}
      <a class="video" href="/video/{video.id}">
        <img class="thumbnail" src="{video.thumbnail}" alt="{video.title}">
        <div class="info">
          <h3>{video.title}</h3>
          <div class="stats">
            <span>{parseViews(video.views)} views</span> |
            <span>{parseTimestampFromNow(video.timestamp)}</span>
          </div>
          <div class="user">
            <ProfilePic size={"small"} pic={video?.user?.avatar}></ProfilePic>
            <span>{video?.user?.name}</span>
          </div>
          <p>{video.description.slice(0,80)}...</p>
        </div>
      </a>
    {/each}
  {:else}
    <p>No videos found</p>
  {/if}
  {#await fetchPromise}
    <LoadingSpinner />
  {:catch error}
    <LoadingSpinner loadingFailed={true} />
  {/await}
</div>

<style lang="scss">
  .searchResult {
    flex: 1;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    height: 300px;
    overflow-y: scroll;
    gap: 0.5rem;
  }

  .video {
    display: flex;
    align-items: flex-start;
    text-decoration: none;
    color: #000;

    .thumbnail {
      width: 360px;
      height: 200px;
      border-radius: var(--radius);
    }
    .info {
      flex: 1;
      width: 100%;
      padding: 0 1rem;
      display: flex;
      flex-direction: column;
      justify-content: stretch;
      align-items: flex-start;
      h3 {
        font-size: 1.5rem;
        margin: 0;
      }
    }
    .stats {
      font-size: 0.9rem;
      color: #3d3d3d;
    }

    .user {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      margin-top: 0.5rem;
    }
  }
</style>
