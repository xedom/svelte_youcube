<script lang="ts">
  import pic4 from "$lib/img/4.jpg";
  import Button from '$lib/components/Button.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import Comment from '$lib/components/Comment.svelte';
  import { VideoCard, VideoContainer } from '$lib/components/videocard';
  import { PlayIcon, } from '$lib/icons';
  import type { Video, User, Comment as CommentType } from '$lib/db/types';

  export let data: any;
  const user: User = data.user;
  const comments: CommentType[] = data.comments;
  const videos: Video[] = data.videos;
  const lastVideo: Video = videos[videos.length - 1];

  enum Page { Home, Videos, Community, Info, }

  $: page = Page.Home;
  $: playVideo = false;
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
  <Button on:click={() => page = Page.Home}>Home</Button>
  <Button on:click={() => page = Page.Videos}>Videos</Button>
  <Button on:click={() => page = Page.Community}>Community</Button>
  <Button on:click={() => page = Page.Info}>Info</Button>
</div>

<!-- home -->
  {#if lastVideo && page == Page.Home}
    <div class="content">
      <div class="showcase">
        <div class="player">
          {#if playVideo}
            <video src="https://xed.im/random/rick_roll.mp4" autoplay controls></video>
          {:else}
            <img class="thumbnail click" src={lastVideo.thumbnail} on:click={() => playVideo = true} alt="thumbnail" />
            <img class="play click" src="{PlayIcon}" on:click={() => playVideo = true} alt="PlayIcon">
          {/if}
        </div>
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
        <VideoCard {video}></VideoCard>
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
          <Comment {comment} user={comment.user}/>
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
  .player {
    flex: none;
    width: 500px;
    height: 300px;
    border-radius: var(--radius);
    overflow: hidden;
    position: relative;

    img.thumbnail {
      display: inline-block;
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .play {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50px);
      height: 100px;
      width: 100px;
      opacity: 0.9;
    }

    video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    .click {
      cursor: pointer;
    }
  }

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

    gap: 2rem;
    padding: 1rem;

    align-items: center;
    justify-content: space-between;

    .col {
      flex: 1;
    }

  }

  .showcase {
    display: flex;
    gap: 1rem;

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
      gap: 1rem;
    }
  }

  .community {
    display: flex;
    flex-direction: column;
    gap: 1rem;

    .post-input {
      display: flex;
      gap: 1rem;
    }
  }

  .infos {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .buttons {
    display: flex;
    flex-direction: row;
    gap: 1rem;
    padding: 1rem;
  }

  hr {
    margin: 2rem;
  }
</style>
