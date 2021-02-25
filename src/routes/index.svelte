<script lang="ts">
	import Loader from "../components/Loader.svelte";
	import bg from "images/rocket-league-picture.jpg";
	import versusRed from "images/versus-red.svg";
	import Input from "../components/Input.svelte";
	import { userStore } from "../stores/users";
	import { goto } from "@sapper/app";

	let name: string = "";
	let nickname: string = "";

	function onChange(event) {
		name = event.detail.value;
	}
	
	function onChangeNickName(event) {
		nickname = event.detail.value;
	}

	function onAddClick(event) {
		userStore.addUser({name: name, nickName: nickname});
		name = "";
		nickname = "";
	}

	function onNextStepClick() {
		goto("game");
	}
</script>

<svelte:head>
	<title>Versus - Rocket League</title>
</svelte:head>

<Loader/>
<main class="home" style="background-image: url({bg})">
	<ul class="player-list">
		{#each $userStore as user}
			<li class="player-item">
				<div class="player-item__avatar">
					{user.name.charAt(0)}.
				</div>
				<div class="player-item__desc">
					<h3 class="player-item__name">
						{user.name}
					</h3>
					{#if user.nickName !== ''}
						<p class="player-item__nickname">{user.nickName}</p>
					{/if}
				</div>
			</li>
		{/each}
	</ul>
	
	<div class="login">
		<img class="login__logo" src={versusRed} alt="versus-red" />
		<h1 class="login__title">
			<strong>Champion,</strong> entrer their name
		</h1>

		<Input on:change={onChange} value={name} placeholder="Name" />
		<Input on:change={onChangeNickName} value={nickname} placeholder="The Crack" />

		<div class="login__action">
			<button on:click={onAddClick} class="button">Add</button>
			<button on:click={onNextStepClick} class="button"
				>Draw lots <svg
					width="57"
					height="57"
					viewBox="0 0 57 57"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<g clip-path="url(#clip0)">
						<path
							d="M56.347 26.9239C56.3463 26.9233 56.3457 26.9225 56.3449 26.9218L44.7107 15.3437C43.8391 14.4763 42.4294 14.4796 41.5618 15.3512C40.6943 16.2228 40.6977 17.6326 41.5693 18.5001L49.3805 26.2734H2.22656C0.996832 26.2734 0 27.2703 0 28.5C0 29.7297 0.996832 30.7266 2.22656 30.7266H49.3804L41.5694 38.4999C40.6978 39.3674 40.6944 40.7772 41.5619 41.6487C42.4295 42.5206 43.8393 42.5236 44.7108 41.6563L56.3451 30.0782C56.3457 30.0775 56.3463 30.0767 56.3471 30.0761C57.2191 29.2057 57.2163 27.7914 56.347 26.9239Z"
							fill="#E41C23"
						/>
					</g>
					<defs>
						<clipPath id="clip0">
							<rect width="57" height="57" fill="white" />
						</clipPath>
					</defs>
				</svg>
			</button>
		</div>
	</div>
</main>

<style lang="scss">
	$black: #0a0a0a;
	$red: #E41C23;
	.home {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 100vh;
		width: 100vw;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-color: $black;
		background-blend-mode: hard-light;
	}

	.button {
		display: inline-flex;
		align-items: center;
		border: none;
		background: none;
		color: white;
		padding: 0;
		font-size: 3rem;
		font-weight: 500;
		font-family: "Work Sans", sans-serif;
		cursor: pointer;
		position: relative;

		svg {
			margin-left: 2rem;
		}

		&:after {
			content: "";
			display: block;
			position: absolute;
			bottom: 0;
			left: 0;
			height: 0.2rem;
			width: 100%;
			background-color: white;
			transform-origin: left;
			transform: scaleX(0);
			transition: transform 0.3s ease-in-out;
		}

		&:hover {
			&:after {
				transform: scaleX(1);
			}
		}
	}

	.player {
		&-list {
			display: flex;
			flex-direction: column;
		}

		&-item {
			display: inline-flex;
			align-items: center;
			margin-bottom: 2rem;

			&__avatar {
				border-radius: 50%;
				background-color: $red;
				color: $black;
				width: 6rem;
				height: 6rem;
				flex-shrink: 0;
				display: inline-flex;
				align-items: center;
				justify-content: center;
				font-size: 3rem;
				font-weight: 500;
			}

			&__desc {
				margin-left: 2rem;
			}

			&__name {
				margin: 0;
				font-size: 3rem;
				font-weight: 500;
				color: white;
			}

			&__nickname {
				margin: 0;
				color: white;
			}
		}
	}

	.login {
		padding: 5rem;
		margin: 5rem;
		background-color: $black;
		max-width: 50rem;

		&__logo {
			width: 14rem;
			margin-bottom: 2rem;
		}

		&__title {
			color: white;
			font-size: 5rem;

			strong {
				display: block;
			}
		}

		&__action {
			display: flex;
			justify-content: flex-end;
			margin-top: 2rem;

			button {
				&:not(first-child) {
					margin-left: 3rem;
				}
			}
		}
	}
</style>
