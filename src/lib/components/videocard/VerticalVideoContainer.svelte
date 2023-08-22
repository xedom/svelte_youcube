<script lang="ts">

</script>

<div class="card-container">
  <slot />
</div>

<style lang="scss">
  .card-container {
    // padding: 0.5rem;
    display: flex;
    flex-direction: row;
    gap: 1rem;
    overflow-x: auto;
  }
</style>
