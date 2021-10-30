<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import Button, { Label, Icon } from '@smui/button';
  import Card, {
    Content,
    PrimaryAction,
    Actions,
    Media,
    MediaContent,
  } from '@smui/card';

  const dispatch = createEventDispatcher();

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  const day = Math.floor(getRandomArbitrary(1,31));
  const month = Math.floor(getRandomArbitrary(0,11));

  const date = new Date(2021, month, day)

  export let highlight = false;
  let eventCover = 'https://loremflickr.com/420/340';
  export let eventTitle = 'BK no Circo Voador';
  export let eventDate = `${date.getDay()+1} de ${date.toLocaleString('pt-BR', { month: 'long' })}`;
  export let eventPlace = ['Centro','Lapa'];
  export let eventTicket;
</script>

<div class="event-card mdc-elevation--z10" class:highlight on:click="{() => dispatch('click', 'open event modal')}">
  <Card>
    <Content>
      <img class="event-cover img-fluid" src={eventCover} />
      <p class="event-date">{eventDate}</p>
      <p class="event-title mdc-typography--headline4">{eventTitle}</p>
    </Content>

    <div class="action-wrapper">  
      <Actions class="card-action--no-padding">
        <Button>
          <Label>{eventPlace[0]}</Label>
        </Button>
        <Button>
          <Label>{eventPlace[1]}</Label>
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
    margin-bottom: 30px;
    width: 32%;
    min-height: 530px;

    :global(.card-action--no-padding) {
      padding: 0 8px;
    }

    :global(.mdc-card) {
      height: 100%;
    }

    :global(.mdc-card__actions) {
      min-height: 1px;
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

      &:nth-child(2) {
        margin-left: 23px;
        margin-right: 23px;
      }
    }

		.event-cover {
			border-radius: 25px;
			display: inline-block;
		}

		.event-title {
			color: #E0E1DD;
			font-size: 30px;
			font-weight: 500;
			display: block;
		}

		.event-date {
			display: block;
			color: #E0E1DD;
			font-size: 18px;
			margin: 10px 0 0;
		}

    .action-wrapper {
      position: absolute;
      bottom: 0;
    }
  }
</style>