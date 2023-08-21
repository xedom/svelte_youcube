<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import type { Video, User, Comment as CommentType } from '$lib/db/types';

  export let comment: CommentType;
  export let user: User|undefined;
  // let user = comment.user;
  if (!user) throw new Error("User not found");

</script>

<div class="comment">
  <a href={"/user/"+user?.id}><ProfilePic pic={user?.avatar}></ProfilePic></a>
  <div class="left">
    <div>
      <a href={"/user/"+user?.id}>{user?.name}</a>
      <!-- <span>14 Jan</span> -->
    </div>
    <span>{comment.body}</span>
    <div class="buttons">
      <Button>Like</Button>
      <Button>Dislike</Button>
      <Button>Reply</Button>
    </div>
  </div>
</div>

<style lang="scss">
  a {
    color: inherit;
    text-decoration: none;
  }
  .comment {
    background-color: #e5e5e5;
    border-radius: var(--radius);
    padding: 1em;
    display: flex;
    gap: 1em;

    .left {
      display: flex;
      flex-direction: column;
      gap: 1em
    }

    .buttons {
      display: flex;
      gap: 0.5em;
    }
  }
</style>
