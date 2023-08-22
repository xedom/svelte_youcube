<script lang="ts">

</script>

<div class="card-container-grid">
  <slot />
</div>

<style lang="scss">
  .card-container-flex {
    // padding: 0.5rem;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 1rem;
    overflow-x: auto;
  }
  .card-container-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    grid-gap: 1rem;
  }
</style>
