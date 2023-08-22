<script context="module" lang="ts">
  type Modal = { open: () => void; close: () => void; };
	const modals: { [key: string]: Modal; } = {}

	export function getModal(id: string = 'default') {
		return modals[id];
	}
</script>

<script lang="ts">
  import {onDestroy} from 'svelte';
  export let id: string = 'default';
  let visible = false;

  function keyPress(ev: KeyboardEvent) {
    if (ev.key=="Escape") close();
  }

  function open(){
    if (visible) return;
    // window.addEventListener("keydown", keyPress);
    document.body.style.overflow = "hidden";
    visible = true;
  }

  function close(){
    if (!visible) return;
    // window.removeEventListener("keydown", keyPress);
    visible = false;
  }

  modals[id] = { open, close }

  onDestroy(()=>{
    delete modals[id];
    // window.removeEventListener("keydown", keyPress);
  })
</script>

<div id="modalBg" class:visible on:click={() => close()}>
	<div id='modal' on:click|stopPropagation={() => {}}>
			<slot></slot>
	</div>
</div>

<style>
	#modalBg {
		visibility: hidden;
		z-index: 9999;
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background: #00000099;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	#modal {
		position: relative;
		border-radius: 6px;
		background: white;
    border: 2px solid #000;
		padding: 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;

		max-width: calc(100vw - 20px);
		max-height: calc(100vh - 20px);
		overflow: auto;
	}

	.visible {
		visibility: visible !important;
	}

</style>
