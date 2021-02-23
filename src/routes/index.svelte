<script lang="ts">
	import Loader from "../components/Loader.svelte"
	import bg from "images/rocket-league-picture.jpg";
	import Input from "../components/Input.svelte";
	import { userStore } from "../stores/users";
	import { goto } from "@sapper/app";
	
	let value: string = "";

	function onChange(event) {
		value = event.detail.value;
	}

	function onAddClick(event) {
		userStore.addUser(value);
		value = "";
	}

	function onNextStepClick() {
		goto("game");
	}
</script>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<Loader></Loader>
<main class="home" style="background-image: url({bg})">
	{#each $userStore as user}
		<div class="hello">{user}</div>
	{/each}
	<div class="login">
		<h1 class="login__title">
			<strong>Champion,</strong> entrer your name
		</h1>

		<Input on:change={onChange} value={value} placeholder="Name"/>

		<div class="login__action">
			<button on:click={onAddClick} class="button">Add</button>
			<button on:click={onNextStepClick} class="button">Draw lots</button>
		</div>
	</div>
</main>

<style lang="scss">
	.home {
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 100vh;
		width: 100vw;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		background-color: black;
		background-blend-mode: hard-light;
	}

	.button {
		border: none;
		background: none;
		color: white;
		padding: 0;
		font-size: 3rem;
		font-weight: 500;
		font-family: 'Work Sans', sans-serif;
		cursor: pointer;
	}

	.login {
		padding: 5rem;
		margin: 5rem;
		background-color: #000000;
		max-width: 50rem;

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
