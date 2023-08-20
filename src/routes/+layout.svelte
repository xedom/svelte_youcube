<script lang="ts">
  import './styles.css';
  import Navbar from '$lib/components/Navbar.svelte';
  import SideNavbar from '$lib/components/SideNavbar.svelte';

  $: collapsed = false;

</script>

<svelte:head>
  <title>You/Clone</title>
</svelte:head>

<Navbar onCollapse={() => collapsed = !collapsed}/>
<div class="content">
  <SideNavbar {collapsed}/>
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