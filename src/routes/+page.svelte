<script lang="ts">
  import {
    VideoCard, VideoContainer,
    VerticalVideoCard, VerticalVideoContainer
  } from "$lib/components/videocard/index.js";

  import { ProfilePicture, } from '$lib/icons/index.js';
  import Button from '$lib/components/Button.svelte';
  import pic1 from "$lib/img/1.jpg";
  import pic2 from "$lib/img/2.jpg";
  import pic3 from "$lib/img/3.jpg";
  import pic4 from "$lib/img/4.jpg";

  const user1 = {
    name: "pingu",
    avatar: ProfilePicture,
  };

  const videos = [
    { user: user1, thumbnail: pic1, title: "title 1", views: 111, data: Date.now()+1000 },
    { user: user1, thumbnail: pic2, title: "title 2", views: 222, data: Date.now()+2000 },
    { user: user1, thumbnail: pic3, title: "title 3", views: 333, data: Date.now()+3000 },
    { user: user1, thumbnail: pic4, title: "title 4", views: 444, data: Date.now()+4000 },
    { user: user1, thumbnail: pic3, title: "title 3", views: 333, data: Date.now()+3000 },
    { user: user1, thumbnail: pic4, title: "title 4", views: 444, data: Date.now()+4000 },
    { user: user1, thumbnail: pic3, title: "title 3", views: 333, data: Date.now()+3000 },
    { user: user1, thumbnail: pic4, title: "title 4", views: 444, data: Date.now()+4000 },
  ];

  const sponsoredVideos = videos;
  const newVideos = videos;
  const randomVideos = videos;

</script>

<div class="buttons">
  <Button>All</Button>
  <Button>News</Button>
  <Button>Music</Button>
  <Button>Movies</Button>
</div>

<div class="sponsored">
  <VideoContainer>
    {#each sponsoredVideos as video}
      <VideoCard videoData={video}/>
    {/each}
  </VideoContainer>
</div>

<hr>

<div class="shorts">
  <VerticalVideoContainer>
    {#each sponsoredVideos as video}
      <VerticalVideoCard videoData={video}/>
    {/each}
  </VerticalVideoContainer>
</div>

<hr>

<div class="new">
  <VideoContainer>
    {#each newVideos as video}
      <VideoCard videoData={video}/>
    {/each}
  </VideoContainer>
</div>

<hr>

<div class="films">
  <VerticalVideoContainer>
    {#each sponsoredVideos as video}
      <VerticalVideoCard videoData={video}/>
    {/each}
  </VerticalVideoContainer>
</div>

<hr>

<div class="random">
  <VideoContainer>
    {#each randomVideos as video}
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