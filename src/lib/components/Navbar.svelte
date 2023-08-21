<script lang="ts">
  import { CollapseIcon, ProfilePicture, SearchIcon, } from '$lib/icons/index.js';
  import Button from '$lib/components/Button.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';

  export let onCollapse: () => void = () => {};
</script>


<nav>
  <Button icon={CollapseIcon} collapsed={true} onClick={() => onCollapse()}>
    Collapse
  </Button>
  <!-- <img src="" alt="logo"> -->
  <a href="/"><h2>YOU/CUBE</h2></a>
  <div class="search">
    <input type="text"/>
    <Button icon={SearchIcon} collapsed={true}>Search</Button>
  </div>
  <Button>Upload</Button>
  <a href="/user/1001"><ProfilePic pic={undefined} size={"small"}/></a>
</nav>

<style lang="scss">
  a {
    text-decoration: none;
    color: inherit;
  }
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
