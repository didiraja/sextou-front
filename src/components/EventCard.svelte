<script lang="ts">
  import Button, { Label, Icon } from '@smui/button';
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    Media,
    MediaContent,
  } from '@smui/card';

  import { formatDate } from '../lib/format.js';

  export let highlight = false;
  export let eventCover = 'https://loremflickr.com/420/340';
  export let eventTitle = 'BK no Circo Voador';
  export let eventDate = `2022-02-01T23:30:00.000Z`;
  export let eventZone = 'Lapa';
  export let eventNeighborhood = 'Centro';
  export let eventTicket;

</script>

<div class="event-card mdc-elevation--z10" class:highlight on:click>
  <Card>
    <Content>
      <img class="event-cover img-fluid" src={eventCover} />
      <p class="event-date">{formatDate(eventDate)}</p>
      <p class="event-title mdc-typography--headline4">{eventTitle}</p>
    </Content>

    <div class="action-wrapper">
      <Actions class="card-action--no-padding">
        <Button>
          <Label>{eventZone.Name}</Label>
        </Button>
        <Button>
          <Label>{eventNeighborhood.Name}</Label>
        </Button>
      </Actions>
      
      <Actions class="card-action-bottom">
        <Button variant="unelevated">
          <Icon class="material-icons">bookmark_border</Icon>
          <Label>Comprar Ingressos</Label>
        </Button>
      </Actions>
    </div>
  </Card>
</div>

<style lang="scss">
  .event-card {
    position: relative;
    width: 100%;
    margin-bottom: 30px;
    
    // Desktop
    // width: 32%;
    // min-height: 530px;

    :global(.card-action--no-padding) {
      padding: 0 8px;
    }

    :global(.mdc-card) {
      height: 100%;
    }

    :global(.mdc-card__actions) {
      // Desktop 
      // min-height: 1px;
    }

    :global(.card-action-bottom) {
      padding-bottom: 16px;
    }

    &.highlight {
      // #996600
      border-top: 10px solid #ffaa00;
      // border-bottom: 10px solid #ffaa00;
      border-radius: 10px;

      --mdc-theme-primary: #ffaa00;

      // Desktop
      // &:nth-child(2) {
      //   margin-left: 23px;
      //   margin-right: 23px;
      // }
    }

		.event-cover {
			// border-radius: 25px;
			display: inline-block;
      margin-bottom: 0.5em;
		}
    
    .event-date {
      display: block;
      color: #E0E1DD;
      font-size: 1.2em;
      text-transform: capitalize;
    }

		.event-title {
			display: block;
			color: #E0E1DD;
			font-size: 1.9em;
			font-weight: 500;
		}


    .action-wrapper {
      // Desktop
      // position: absolute;
      // bottom: 0;
    }
  }
  
  @media (min-width: 768px) {
    .event-card {
      width: 49%;
      height: 32em;
      
      
      &.highlight {
        width: 32%;
        height: 27em;
      }
      
      .event-title {
        font-size: 1.6em;
      }

      .action-wrapper {
        position: absolute;
        bottom: 0;
        width: 100%;

        :global(.card-action-bottom .mdc-button) {
          width: 100%;
        }

      }
    }
  }

  @media (min-width: 1000px) {
    .event-card {
      width: 32%;
      height: 29em;
      
      
      &.highlight {
        height: 30em;
      }
    }
  }

  @media (min-width: 1100px) {
    .event-card {
      height: 31em;
      
      
      &.highlight {
        height: 32em;
      }
    }
  }

  @media (min-width: 1300px) {
    .event-card, .event-card.highlight {
      height: 36em;
    }
  }
</style>