<script lang="ts">
  import { CollapseIcon, ProfilePicture, SearchIcon, } from '$lib/icons/index.js';
  import Button from '$lib/components/Button.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
</script>


<nav>
  <Button icon={CollapseIcon} collapsed={true} onClick={() => {console.log("collapse")}}>
    Collapse
  </Button>
  <img src="" alt="logo">
  <div class="search">
    <input type="text"/>
    <Button icon={SearchIcon} collapsed={true}>Search</Button>
  </div>
  <Button>Upload</Button>
  <ProfilePic size={"small"}></ProfilePic>
</nav>

<style lang="scss">
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #e5e5e5;
    padding: .5em;
    gap: 1em;

    .search {
      flex: 1;
      display: flex;
      justify-content: center;
      gap: 0.25em;

      input {
        flex: 1;
        max-width: 800px;
        border: none;
        border-radius: var(--radius);
        outline: none;
        padding: 0 1em;
      }
    }
  }
</style>