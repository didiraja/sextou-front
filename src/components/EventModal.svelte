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

      <img class="event-cover" src={$EventDetailsStore.eventCover} />
      
      <Content ><span class="event-description">{$EventDetailsStore.eventDescription}</span></Content>
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
    margin: 10px;

		p {
			color: $white-pallete;
		}

    .close {
			position: absolute;
			right: 0;
			top: 0;
		}
		
		.event-title {
      font-size: 1.8em;;
      line-height: 1.3em;

			font-weight: bold;
      text-align: center;
		}

		.event-info {
      display: flex;
      flex-direction: column;
      margin: 1em auto;
      text-align: center;
		}

    .event-place {
      margin: .5em 0;
    }

    .event-date {
      display: inline-block;
      text-transform: capitalize;
    }

		.event-cover {
      width: 800px;
      border-radius: 5px;
      margin: 0 auto 1.5em;
      display: block;
		}

    .event-description {
      font-size: 1.5em;
    }

    @media (min-width: 768px) {

      .close {
        right: 1.5em;
        top: 0.5em;
      }

      .event-info {
        width: 40em;
        flex-flow: initial;
        justify-content: space-between;
        align-items: center;
      }

      .event-place {
        margin: 0;
      }
    }

    @media (min-width: 1000px) {
      

      .event-title {
        font-size: 3.5em;
      }
      .event-info {
        width: 80%;
        margin: 0.3em auto 2em;
      }

      .event-date {
        font-size: 24px;
      }
    }

    @media (min-width: 1300px) {
      width: 75vw;
      margin: 2em auto 0;
      padding: 1.5em 2em;
    }

    @media (min-width: 1400px) {
      

    }
    
    @media (min-width: 1600px) {

    }
	}
</style>