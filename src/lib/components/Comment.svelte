<script lang="ts">
  import Comment from '$lib/components/Comment.svelte';
  import { ProfilePicture, } from '$lib/icons/index.js';
  import Button from '$lib/components/Button.svelte';
</script>

<div class="comment">
  <img src="{ProfilePicture}" alt="user">
  <div class="left">
    <div>
      <span>username</span> |
      <span>14 Jan</span>
    </div>
    <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet voluptatum eaque nemo nisi dicta aliquid totam ipsum obcaecati est quo. Recusandae laborum enim illum, officia ea aliquam facere neque laboriosam!</span>
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

    img {
      width: 80px;
      height: 80px;
      object-fit: cover;
      border-radius: 50%;
    }

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