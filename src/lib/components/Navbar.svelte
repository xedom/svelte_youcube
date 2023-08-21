<script lang="ts">
  import { CollapseIcon, SearchIcon, } from '$lib/icons/index.js';
  import Button from '$lib/components/Button.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import Modal, { getModal } from '$lib/components/Modal.svelte';

  export let onCollapse: () => void = () => {};
</script>

<Modal>
	<h1>Upload Video</h1>
  <div class="uploadArea">
    Drop here to upload
  </div>
  <div class="modalButtons">
    <Button onClick={()=>getModal().close()}>Cancel</Button>
  </div>
</Modal>

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
  <Button onClick={()=>getModal().open()}>Upload</Button>
  <a href="/user/1001"><ProfilePic pic={undefined} size={"small"}/></a>
</nav>

<style lang="scss">
  .uploadArea {
    height: 200px;
    width: 350px;
    border: 1px dashed black;
    border-radius: var(--radius);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modalButtons {
    display: flex;
    justify-content: center;
    gap: 1em;
  }

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
