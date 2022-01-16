<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  
  import IconButton from '@smui/icon-button';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
  import Button, { Label, Icon } from '@smui/button';
  import { EventDetailsStore } from '../store.js';
  import { formatDate } from '../lib/format.js';

  const dispatch = createEventDispatcher();

  // $ : hasDetailToShow = $EventDetailsStore.length >= 1;
</script>

<div class="backdrop" on:click|self={() => dispatch('close', 'close modal')}>
  <Paper class="event-modal" elevation={10}>
    <span class="close">
      <IconButton class="material-icons" on:click="{() => dispatch('close', 'close modal')}">close</IconButton>
    </span>

    {#if $EventDetailsStore}
      <p class="event-title mdc-typography--headline3">{$EventDetailsStore.eventTitle}</p>

      <div class="event-info">
        <p class="event-date">{formatDate($EventDetailsStore.eventDate)}</p>
        
        <span class="event-place">
          <Button>
            <Label>{$EventDetailsStore.eventZone.Name}</Label>
          </Button>
          
          <Button>
            <Label>{$EventDetailsStore.eventNeighborhood.Name}</Label>
          </Button>
        </span>
        
        <Button variant="unelevated">
          <Icon class="material-icons">bookmark_border</Icon>
          <Label>Comprar Ingressos</Label>
        </Button>
      </div>

      <img class="event-cover img-fluid" src={$EventDetailsStore.eventCover} />
      
      <Content>{$EventDetailsStore.eventDescription}</Content>
    {:else}
      <p class="event-title mdc-typography--headline3">Ocorreu algum erro, tente novamente.</p>
    {/if}
  </Paper>
</div>

<style lang="scss">
  $white-pallete: #E0E1DD;

  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(black, 0.8);
  }

  :global(.event-modal) {
    width: 90%;
    margin: 10px;

    // Desktop
    // top: 30px;
		// z-index: 9;

		p {
			color: $white-pallete;
		}
		
		.event-title {
      font-size: 2.5em;
			font-weight: bold;
      text-align: center;
		}

		.event-info {
      width: 15.6em;
      margin: 0 auto 1em;

			.event-place {
				margin: 0 10px;
			}

			.event-date {
				display: inline-block;
			}
		}

		.event-cover {
			margin-bottom: 10px;
		}

		.close {
			position: absolute;
			right: 0;
			top: 0;
		}
	}
</style>