<script lang="ts">
  import Comment from '$lib/components/Comment.svelte';
  import Button from '$lib/components/Button.svelte';
  import { parseDateWithTime, parseViews } from '$lib/utils/index';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import { CollapseIcon, ProfilePicture, SearchIcon, } from '$lib/icons/index.js';
  import type { Video, User, Comment as CommentType } from '$lib/db/types';

  $: isDescriptionCollapsed = true;
  $: commentInput = '';

  export let data: any;
  let video: Video&{comments: CommentType[]} = data.video;
  let user: User|undefined = video.user;
  let comments: CommentType[] = video.comments;

  if (!user) throw new Error("User not found");

  async function onCommentSubmit() {
    const loggedUser: User = {
      id: 1001,
      username: 'Pingu',
      avatar: ProfilePicture,
      subs: 420,
      password: 'nootnoot',
      name: 'pingu de bro',
      email: 'pingu@noot.com',
      videos: 314,
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
    comments = [...comments, newComment];
  }

</script>



<div class="player">
  <!-- <video src=""></video> -->
  <!-- <iframe width="560" height="315" src="https://www.youtube.com/embed/lAtz2sctvxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> -->
  <img src={video.thumbnail} alt="thumbnail" />
</div>

<div class="info">
  <h1>{video.title}</h1>

  <div class="title">
    <ProfilePic pic={user?.avatar}></ProfilePic>
    <span>
      <h2>{user?.username}</h2>
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
      <Button onClick={() => {isDescriptionCollapsed = !isDescriptionCollapsed}}>Show More...</Button>
    {:else}
      <span>{video.description}</span>
      <Button onClick={() => {isDescriptionCollapsed = !isDescriptionCollapsed}}>Show Less</Button>
    {/if}
    
  </div>
</div>

<div class="comments">
  <h4>input: {commentInput}</h4>
  <div class="input">
    <input type="text" bind:value={commentInput} />
    <Button onClick={onCommentSubmit}>Send</Button>
  </div>

  {#each comments as comment}
    <Comment commentData={comment}></Comment>
  {/each}
  {#if comments.length === 0}
    <span>No comments yet</span>
  {/if}

</div>

<style lang="scss">
  .player {
    flex: none;
    background-color: #151515;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 550px;
    img {
      height: 100%;
    }
  }
  
  .comments {
    margin-top: 2em;
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .input {
    display: flex;

    input {
      flex: 1;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .title {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1em;
    span {
      flex: 1
    }
  }
  .stats {
    font-weight: bold;
  }
</style>