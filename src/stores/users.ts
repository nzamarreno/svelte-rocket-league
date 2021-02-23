import { writable } from "svelte/store";

function createUserStore() {
    const { subscribe, set, update } = writable(["Léonardo", "Adrien", "Nicolas", "Slimane", "Khaled", "Julien", "Francis", "Raphael"]);

    return {
        subscribe,
        addUser: (user: string) => update(state => [...state, user]),
        reset: () => set([])
    }
}

export const userStore = createUserStore();