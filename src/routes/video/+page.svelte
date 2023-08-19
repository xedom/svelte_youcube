<script lang="ts">
  import Comment from '$lib/components/Comment.svelte';
  import Button from '$lib/components/Button.svelte';
  import { ProfilePicture, } from '$lib/icons/index.js';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
</script>



<div class="player">
  <!-- <video src=""></video> -->
  <iframe width="560" height="315" src="https://www.youtube.com/embed/lAtz2sctvxA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

<div class="info">
  <h1>They Have No Sense of Danger</h1>

  <div class="title">
    <ProfilePic></ProfilePic>
    <span>
      <h2>Daily Dose Of Internet</h2>
      <h3>16,4 Mln Subs</h3>
    </span>

    <Button>Subscribe</Button>

    <Button>Like 165k</Button>
    <Button>Dislike 6k</Button>
    <Button>Watchlater</Button>
  </div>

  <div class="desc">
    <span>2,6 Mln Views</span>
    <span>23 Aug</span>

    <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit modi veniam tempora quae non! In blanditiis labore, tempore repellat, vel architecto dignissimos neque tenetur odio doloremque iste, consectetur sunt et.</span>
    <Button>More...</Button>
  </div>
</div>

<div class="comments">
  <div class="input">
    <input type="text" />
    <Button>Send</Button>
  </div>

  <Comment/>
  <Comment/>
  <Comment/>
  <Comment/>
  <Comment/>
</div>

<style lang="scss">
  .player {
    background-color: #e5e5e5;
    display: flex;
    align-items: center;
    justify-content: center;
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
</style>