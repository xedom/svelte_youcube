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
  <Button onClick={() => onClick("/")}
    {collapsed}
    icon={HomeIcon}
  >
    Home
  </Button>
  <Button onClick={() => onClick("/user")}
    {collapsed}
    icon={PersonIcon}
  >
    User
  </Button>
  <Button onClick={() => onClick("/subs")}
    {collapsed}
    icon={SubscriptionsIcon}
  >
    Subs
  </Button>
  <Button onClick={() => onClick("/auth")}
    {collapsed}
    icon={PersonIcon}
  >
    Auth
  </Button>
  <!-- <Button onClick={() => onClick("/video")}
    {collapsed}
    icon={SmartDisplayIcon}
  >
    Video
  </Button> -->
  <Button onClick={() => onClick("/watchlater")}
    {collapsed}
    icon={LibraryIcon}
  >
    Watch Later
  </Button>
</aside>

<style lang="scss">
  aside {
    // width: 200px;

    display: flex;
    flex-direction: column;
    gap: .5em;
    padding: .5em;
    padding-right: 0;
  }
</style>