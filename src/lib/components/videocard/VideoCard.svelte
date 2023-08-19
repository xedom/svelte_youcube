<script lang="ts">
  // { user: any, thumbnail: any, title: any, views: any, data: any }

  function formatDate(date: string) {
    const dateCurr = new Date(date);
    // return dateCurr.toLocaleDateString("it-IT")
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return `${dateCurr.getHours()}:${dateCurr.getMinutes()}, ${dateCurr.getDate()} ${months[dateCurr.getMonth()]}`
  }

  import { ProfilePicture } from '$lib/icons/index.js';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import pic1 from "$lib/img/1.jpg";
  export const videoData: any|undefined = { user: {
    name: "pingu",
    avatar: ProfilePicture,
  }, thumbnail: pic1, title: "title 1", views: 111, data: Date.now()+1000 };
</script>

<div class="card">
  <img src="{videoData?.thumbnail}" alt="video thumbnail">
  <div class="bottom">
    <div class="user">
      <!-- <img src="{videoData?.user?.avatar}" alt="user"> -->
      <ProfilePic size={"small"}>{videoData?.user?.avatar}</ProfilePic>
    </div>
    <div class="right">
      <div class="title">{videoData?.title}</div>
      <div class="username">{videoData?.user?.name}</div>
      <div class="info">
        <div class="views">{videoData?.views} Views</div>
        <div class="date">{formatDate(videoData?.data)}</div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  .card {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    width: 350px;
    border-radius: var(--radius);
    justify-content: center;
    align-items: center;
    gap: 0.5em;

    img {
      height: 200px;
      width: 100%;
      border-radius: var(--radius);
      object-fit: cover;
    }

    .title {
      font-weight: 600;
    }

    .bottom {
      display: flex;
      width: 100%;
      gap: 0.5em;

      img {
        height: 2.5em;
        width: 2.5em;
        border-radius: 50%;
      }
    }

    .right {
      width: 100%;
    }

    .info {
      display: flex;
      width: 100%;
      flex-direction: row;
      gap: 1em;
    }
  }
</style>