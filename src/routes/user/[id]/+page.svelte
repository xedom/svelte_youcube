<script lang="ts">
  import pic4 from "$lib/img/4.jpg";
  import Button from '$lib/components/Button.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import Comment from '$lib/components/Comment.svelte';
  import { VideoCard, VideoContainer } from '$lib/components/videocard';
  import type { Video, User, Comment as CommentType } from '$lib/db/types';

  export let data: any;
  const user: User = data.user;
  const comments: CommentType[] = data.comments;
  const videos: Video[] = data.videos;
  const lastVideo: Video = videos[videos.length - 1];

  enum Page { Home, Videos, Community, Info, }

  $: page = Page.Home;
</script>

<div class="background" style="background-image: url({pic4});">
  <!-- <img src="{pic4}" alt="bg"> -->
</div>

<div class="content">
  <div class="user">
    <ProfilePic pic={user.avatar} size={"large"}></ProfilePic>
    <div class="col">
      <h1>{user.name}</h1>
      <span>{user.subs} subs</span>
      <span>{user.videos} videos</span>
    </div>

    <Button>Subscribe</Button>
  </div>
</div>

<div class="buttons">
  <Button onClick={() => page = Page.Home}>Home</Button>
  <Button onClick={() => page = Page.Videos}>Videos</Button>
  <Button onClick={() => page = Page.Community}>Community</Button>
  <Button onClick={() => page = Page.Info}>Info</Button>
</div>

<!-- home -->
  {#if lastVideo && page == Page.Home}
    <div class="content">
      <div class="showcase">
        <img src="{lastVideo.thumbnail}" alt="vid">
        <div class="desc">
          <h2>{lastVideo.title}</h2>
          <span>{lastVideo.description}</span>
        </div>
      </div>
    </div>
  {/if}

<!-- videos -->

  {#if videos.length > 0 && page == Page.Videos}
    <h3>Uploaded Videos</h3>
    <VideoContainer>
      {#each videos as video}
        <VideoCard videoData={video}></VideoCard>
      {/each}
    </VideoContainer>
  {/if}

<!-- community -->
  {#if comments.length > 0 && page == Page.Community}
    <div class="community">
      <h3>Community</h3>
      <!-- <div class="post-input">
        <input type="text">
        <Button>Submit</Button>
      </div> -->
      <div class="comments">
        {#each comments as comment}
          <Comment {comment}/>
        {/each}
      </div>
    </div>
  {/if}

<!-- info -->
  {#if page == Page.Info}
    <div class="infos">
      <p><strong>Description:</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero totam consequuntur, minus adipisci nostrum neque nisi! Aspernatur, sed aut tempora deleniti rerum molestias hic alias voluptatem, magni saepe voluptas repellat!</p>
      <p><strong>Created:</strong> 12.12.2012</p>
      <p><strong>Videos:</strong> {user.videos}</p>
      <p><strong>Links:</strong> twitch, bho, facebook</p>
    </div>
  {/if}


<hr>

<style lang="scss">
  .background {
    flex: none;
    height: 300px;
    border-radius: var(--radius);

    background-attachment: fixed;
    background-position: bottom;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .user {
    display: flex;
    flex-direction: row;

    gap: 2em;
    padding: 1em;

    align-items: center;
    justify-content: space-between;

    .col {
      flex: 1;
    }

  }

  .showcase {
    display: flex;
    gap: 1em;

    img {
      flex: none;
      height: 250px;
      width: 500px;
      object-fit: cover;
      border-radius: var(--radius);
    }

    .desc {
      display: flex;
      flex-direction: column;
      gap: 1em;
    }
  }

  .community {
    display: flex;
    flex-direction: column;
    gap: 1em;

    .post-input {
      display: flex;
      gap: 1em;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1em;
    padding: 1em;
  }

  hr {
    margin: 2em;
  }
</style>
