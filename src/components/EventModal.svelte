<script lang="ts">
  import { createEventDispatcher } from 'svelte';
  import IconButton from '@smui/icon-button';
	import Paper, { Title, Subtitle, Content } from '@smui/paper';
  import Button, { Label, Icon } from '@smui/button';

  const dispatch = createEventDispatcher();

  function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  };

  const day = Math.floor(getRandomArbitrary(1,31));
  const month = Math.floor(getRandomArbitrary(0,11));

  const date = new Date(2021, month, day)

  let eventCover = 'https://loremflickr.com/800/400';
  export let eventTitle = 'BK no Circo Voador';
  export let eventDate = `${date.getDay()+1} de ${date.toLocaleString('pt-BR', { month: 'long' })}`;
  export let eventPlace = ['Centro','Lapa'];
  export let eventTicket = `https://ticket.com/${getRandomArbitrary(1565,6858)}/`;
  export let eventDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus pellentesque ex volutpat dapibus interdum. Suspendisse quis mollis ligula, in egestas urna. Sed tincidunt scelerisque metus et varius. Donec congue felis id magna molestie dapibus. Nam laoreet, metus in consequat sagittis, neque ex lobortis tellus, sed posuere lectus metus et nibh.';
</script>

<Paper class="event-modal" elevation={10}>
  <span class="close">
    <IconButton class="material-icons" on:click="{() => dispatch('close', 'close modal event')}">close</IconButton>
  </span>

  <p class="event-title mdc-typography--headline3">{eventTitle}</p>

  <div class="event-info">
    <p class="event-date">{eventDate}</p>
    
    <span class="event-place">
      <Button>
        <Label>{eventPlace[0]}</Label>
      </Button>

      <Button>
        <Label>{eventPlace[1]}</Label>
      </Button>
    </span>
    
    <Button variant="unelevated">
      <Icon class="material-icons">bookmark_border</Icon>
      <Label>Comprar Ingressos</Label>
    </Button>
  </div>

  <img class="event-cover img-fluid" src={eventCover} />

  <Content>{eventDescription}</Content>
</Paper>

<style lang="scss">
  $white-pallete: #E0E1DD;

  :global(.event-modal) {
    position: fixed;
    top: 0;
    left: 0;
    margin: 10px;
    z-index: 9;

    // Desktop
    // top: 30px;
		// z-index: 9;

		p {
			color: $white-pallete;
		}
		
		.event-title {
      font-size: 2.5em;
			font-weight: bold;
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