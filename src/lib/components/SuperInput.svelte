<script lang="ts">
	export let value: string = "";
</script>

<input type="text" on:keydown bind:value />

<style lang="scss">
  input {
    flex: 1;
    border: none;
    border-radius: var(--radius);
    outline: none;
    padding: 0 1rem;
    background-color: #f5f5f5;
  }
</style>
