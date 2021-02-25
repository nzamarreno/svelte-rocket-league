<script lang="ts">
    import { createEventDispatcher } from "svelte";

    export let value: string = "";
    export let placeholder: string = "Your label here";
    export let className: string = "";

    const dispatch = createEventDispatcher();

    function onChange(event) {
        dispatch("change", {
            value: event.currentTarget.value,
        });
    }
</script>

<input
    type="text"
    class={className}
    on:input={onChange}
    {value}
    {placeholder}
/>

<style lang="scss">
    input {
        border: none;
        width: 100%;
        background: none;
        border-bottom: 0.1rem solid white;
        color: white;
        font-size: 3rem;
        padding: 1rem;
        box-sizing: border-box;
        margin-bottom: 3rem;

        &::-webkit-input-placeholder {
            font-family: "Work Sans";
            font-size: 3rem;
        }
    }
</style>
