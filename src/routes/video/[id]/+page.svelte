<script lang="ts">
  import Comment from '$lib/components/Comment.svelte';
  import Button from '$lib/components/Button.svelte';
  import { parseDateWithTime, parseViews } from '$lib/utils/index';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import { ProfilePicture, PlayIcon, } from '$lib/icons';
  import type { Video, User, Comment as CommentType } from '$lib/db/types';

  $: isDescriptionCollapsed = true;
  $: commentInput = '';

  $: playVideo = false;

  export let data: any;
  let video: Video&{comments: CommentType[]} = data.video;
  let user: User|undefined = video.user;
  let comments: CommentType[] = video.comments;

  if (!user) throw new Error("User not found");

  async function onCommentSubmit() {
    if (commentInput.trim() == '') return;

    const loggedUser: User = {
      id: 1001,
      username: 'Pingu',
      avatar: ProfilePicture,
      subs: 420,
      password: 'nootnoot',
      name: 'pingu de bro',
      email: 'pingu@noot.com',
      videos: 69,
    };

    const newComment: CommentType = {
      id: 100+Math.round(Math.random()*100000),
      user: loggedUser,
      userid: loggedUser.id,
      videoid: video.id,
      body: commentInput,
    }

    // const res = await fetch('/comment', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(newComment)
    // });
    // const values = await res.json();

    commentInput = '';
    comments = [newComment, ...comments];
    console.log(comments);

    // comments = [...comments, newComment];
  }
</script>



<div class="player">
  {#if playVideo}
    <video src="https://xed.im/random/rick_roll.mp4" autoplay></video>
    <!-- <iframe width="560"
    height="315"
    src="https://www.youtube.com/embed/dQw4w9WgXcQ"
    title="YouTube video player"
    frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen></iframe> -->
  {:else}
    <img class="click" src={video.thumbnail} on:click={() => playVideo = true} alt="thumbnail" />
    <img class="play click" src="{PlayIcon}" on:click={() => playVideo = true} alt="PlayIcon">
  {/if}
</div>

<div class="info">
  <h1>{video.title}</h1>

  <div class="title">
    <a href={"/user/"+user?.id}><ProfilePic pic={user?.avatar}></ProfilePic></a>
    <span>
      <a href={"/user/"+user?.id}><h2>{user?.username}</h2></a>
      <h3>{parseViews(user?.subs??0)} Subs</h3>
    </span>

    <Button>Subscribe</Button>

    <Button>Like {video.likes}</Button>
    <Button>Dislike {video.dislikes}</Button>
    <Button>Watchlater</Button>
  </div>

  <div class="desc">
    <div class="stats">
      <span>{parseViews(video.views)} Views</span> |
      <span>{parseDateWithTime(video.timestamp)}</span>
    </div>
    {#if isDescriptionCollapsed}
      <span>{video.description.slice(0, 80)}...</span>
      <Button on:click={() => {isDescriptionCollapsed = !isDescriptionCollapsed}}>Show More...</Button>
    {:else}
      <span>{video.description}</span>
      <Button on:click={() => {isDescriptionCollapsed = !isDescriptionCollapsed}}>Show Less</Button>
    {/if}

  </div>
</div>

<div class="comments">
  <!-- <h4>input: {commentInput}</h4> -->
  <div class="input">
    <input type="text" bind:value={commentInput} />
    <Button on:click={onCommentSubmit}>Send</Button>
  </div>
  {#if comments.length === 0}
    <span>No comments yet</span>
  {:else}
    {#each comments as comment}
      <!-- {comment.user?.avatar.toString()} -->
      <Comment {comment} user={comment.user}></Comment>
    {/each}
  {/if}

</div>

<style lang="scss">

  .player {
    flex: none;
    background-color: #000000;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 700px;
    position: relative;

    iframe, video {
      height: 100%;
      width: 100%;
      object-fit: cover;
    }

    img { height: 100%; }
    img.click { cursor: pointer; }

    img.play {
      opacity: 0.8;
      position: absolute;
      height: 300px !important;
      top: calc(50% - 150px);

      &:hover {
        opacity: 1;
        height: 330px !important;
        top: calc(50% - 165px);
        transition: all 0.2s ease-in-out;
      }
    }
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  .comments {
    margin-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .input {
    display: flex;
    gap: 1rem;

    input {
      flex: 1;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    span {
      flex: 1
    }
  }
  .stats {
    font-weight: bold;
  }
</style>
