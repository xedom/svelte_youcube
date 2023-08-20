<script lang="ts">
  import Button from '$lib/components/Button.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import type { Video, User, Comment as CommentType } from '$lib/db/types';

  export let commentData: CommentType;
  let user = commentData.user;
  if (!user) throw new Error("User not found");

</script>

<div class="comment">
  <ProfilePic pic={user?.avatar}></ProfilePic>
  <div class="left">
    <div>
      <span>{user?.username}</span> |
      <!-- <span>14 Jan</span> -->
    </div>
    <span>{commentData.body}</span>
    <div class="buttons">
      <Button>Like</Button>
      <Button>Dislike</Button>
      <Button>Replay</Button>
    </div>
  </div>
</div>

<style lang="scss">
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