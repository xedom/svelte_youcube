<script lang="ts">

</script>

<div class="card-container">
  <slot />
</div>

<style lang="scss">
  .card-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // padding: 0.5em;
    gap: 1em;
  }
</style>