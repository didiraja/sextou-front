<!-- <script lang="ts">
	import { goto } from '$app/navigation';
</script> -->

<header class="header-wrapper">
	<div class="header-menu">
		<ul class="header-menu--common">
			<li>
				<a class="menu-item" href="/">Home</a>
			</li>
			<li>
				<a class="menu-item" href="#">Ingressos</a>
			</li>
			<li>
				<a class="menu-item" href="#">Sobre</a>
			</li>
		</ul>
	</div>
</header>

<style lang="postcss">
	.header-wrapper {
		@apply fixed z-10 w-full backdrop-blur-sm drop-shadow-md bg-white/5 p-3;
	}

	.header-menu {
		@apply w-60 ml-auto;

		&--common {
			@apply text-white text-xl flex justify-between;

			li {
				@apply inline-block;
			}

			.menu-item {
				@apply underline hover:no-underline underline-offset-1 cursor-pointer;
			}
		}
	}
</style>
