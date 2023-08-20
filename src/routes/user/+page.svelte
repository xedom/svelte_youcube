<script lang="ts">
  import pic4 from "$lib/img/4.jpg";
  import pic2 from "$lib/img/2.jpg";
  import Button from '$lib/components/Button.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
</script>

<div class="background" style="background-image: url({pic4});">
  <!-- <img src="{pic4}" alt="bg"> -->
</div>

<div class="content">
  <div class="user">
    <ProfilePic pic={undefined} size={"large"}></ProfilePic>
    <div class="col">
      <h1>username</h1>

      <span>91 subs</span>
      <span>121 videos</span>
    </div>

    <Button>Subscribe</Button>
  </div>
</div>

<!-- home -->
<div class="content">
  <div class="showcase">
    <img src="{pic2}" alt="vid">
    <div class="desc">
      <h2>title</h2>
      <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem quaerat placeat perferendis ut temporibus sint facilis, nihil repudiandae similique deserunt fugiat at facere, itaque alias minus aliquam soluta possimus ex?</span>
    </div>
  </div>
</div>

<!-- videos -->
<div class="content">

</div>

<!-- community -->
<div class="content">
  <div class="post-input">
    <input type="text">
    <button>Submit</button>
  </div>
  <div class="comments">
    <!-- infinite scrolling -->
    <!-- <Comment/>
    <Comment/>
    <Comment/> -->
  </div>
</div>

<!-- info -->
<div class="content">
  <span>Description</span>
  <span>Contacts</span>
  <span>Created: date</span>
  <span>Videos: 22</span>
  <span>Links: twitch, bho, facebook</span>
</div>


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

  .content {
    padding: 0 6em;
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
</style>