<script lang="ts">
  import { goto } from '$app/navigation';
  import Button from '$lib/components/Button.svelte';
  import {
    HomeIcon, LibraryIcon, PersonIcon,
    SmartDisplayIcon,
    SubscriptionsIcon,
  } from '$lib/icons/index.js';

  function onClick(href: string) {
    goto(href)
  }

  export let collapsed: boolean = false;
</script>

<aside>
  <Button on:click={() => onClick("/")} {collapsed} icon={HomeIcon}>
    Home
  </Button>
  <!-- <Button on:click={() => onClick("/user")} {collapsed} icon={PersonIcon}>
    User
  </Button> -->
  <Button on:click={() => onClick("/subs")} {collapsed} icon={SubscriptionsIcon}>
    Subs
  </Button>
  <Button on:click={() => onClick("/auth")} {collapsed} icon={PersonIcon}>
    Auth
  </Button>
  <!-- <Button on:click={() => onClick("/video")} {collapsed} icon={SmartDisplayIcon}>
    Video
  </Button> -->
  <Button on:click={() => onClick("/watchlater")} {collapsed} icon={LibraryIcon}>
    Watch Later
  </Button>
</aside>

<style lang="scss">
  aside {
    // width: 200px;

    display: flex;
    flex-direction: column;
    gap: .5rem;
    padding: .5rem;
    padding-right: 0;
  }
</style>
