<script lang="ts">

</script>

<div class="card-container">
  <slot />
</div>

<style lang="scss">
  .card-container {
    // padding: 0.5em;
    display: flex;
    flex-direction: row;
    gap: 1em;
    overflow-x: auto;
  }
</style>