<script lang="ts">
  import { CollapseIcon, SearchIcon, } from '$lib/icons/index.js';
  import Button from '$lib/components/Button.svelte';
  import SuperInput from '$lib/components/SuperInput.svelte';
  import ProfilePic from '$lib/components/ProfilePic.svelte';
  import Modal, { getModal } from '$lib/components/Modal.svelte';
  import { goto } from '$app/navigation';

  export let onCollapse: () => void = () => {};

  $: inputValue = '';

  export const onKeydown = ({ target, key }: KeyboardEvent) => {
    if (key === 'Enter') {
      // const inputValue = (target as HTMLButtonElement).value;
      goto(`/search?query=${inputValue}`);
    }
  };
</script>

<Modal>
	<h1>Upload Video</h1>
  <div class="uploadArea">
    Drop here to upload
  </div>
  <div class="modalButtons">
    <Button on:click={()=>getModal().close()}>Cancel</Button>
  </div>
</Modal>

<nav>
  <Button icon={CollapseIcon} collapsed={true} on:click={() => onCollapse()}>
    Collapse
  </Button>
  <!-- <img src="" alt="logo"> -->
  <a href="/"><h2>YOU/CUBE</h2></a>
  <div class="search">
    <div class="container">
      <SuperInput on:keydown={onKeydown} bind:value={inputValue}/>
      <Button icon={SearchIcon} collapsed={true} on:click={()=>goto(`/search?query=${inputValue}`)}>Search</Button>
    </div>
  </div>
  <Button on:click={()=>getModal().open()}>Upload</Button>
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
    gap: 1rem;
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
    padding: .5rem;
    gap: 1rem;

    .search {
      flex: 1;
      display: flex;
      justify-content: center;
      gap: 0.25rem;

      .container {
        width: 800px;
        display: flex;
        justify-content: center;
        gap: 0.25rem;
      }
    }
  }
</style>
