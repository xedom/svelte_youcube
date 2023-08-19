<script lang="ts">
  import './styles.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import SideNavbar from '$lib/components/SideNavbar.svelte';
</script>

<svelte:head>
  <title>YouClone</title>
</svelte:head>

<Navbar/>
<div class="content">
  <SideNavbar/>
  <main>
    <slot />
  </main>
</div>

<style lang="scss">
  .content {
    flex: 1;
    display: flex;
    flex-direction: row;
    overflow: hidden;

    main {
      flex: 1;
      display: flex;
      overflow: auto;
      flex-direction: column;
      gap: .5em;
      padding: .5em;
    }
  }
</style>