<script lang="ts">
  import { ProfilePicture } from '$lib/icons/index.js';
  import pic1 from "$lib/img/1.jpg";
  export const videoData: any|undefined = { user: {
    name: "pingu",
    avatar: ProfilePicture,
  }, thumbnail: pic1, title: "title 1", views: 111, data: Date.now()+1000, duration: '2:10:15' };
</script>

<div class="card-vertical">
  <img src="{videoData.thumbnail}" alt="short img">
  <div class="duration">{videoData.duration}</div>
  <div class="title">{videoData.title}</div>
  <div class="views">{videoData.views}</div>
</div>

<style lang="scss">
  .card-vertical {
    cursor: pointer;
    
    img {
      height: 400px;
      width: 250px;
      border-radius: var(--radius);
      object-fit: cover;
    }
  }
</style>