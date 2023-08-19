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
</script>

<aside>
  <Button onClick={() => onClick("/")}
    collapsed={false}
    icon={HomeIcon}
  >
    Home
  </Button>
  <Button onClick={() => onClick("/user")}
    collapsed={false}
    icon={PersonIcon}
  >
    User
  </Button>
  <Button onClick={() => onClick("/subs")}
    collapsed={false}
    icon={SubscriptionsIcon}
  >
    Subs
  </Button>
  <Button onClick={() => onClick("/auth")}
    collapsed={false}
    icon={PersonIcon}
  >
    Auth
  </Button>
  <Button onClick={() => onClick("/video")}
    collapsed={false}
    icon={SmartDisplayIcon}
  >
    Video
  </Button>
  <Button onClick={() => onClick("/watchlater")}
    collapsed={false}
    icon={LibraryIcon}
  >
    Watch Later
  </Button>
</aside>

<style lang="scss">
  aside {
    width: 200px;

    display: flex;
    flex-direction: column;
    gap: .5em;
    padding: .5em;
  }
</style>