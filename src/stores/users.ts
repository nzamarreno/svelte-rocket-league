import { writable } from "svelte/store";

export interface IUser {
    name: string;
    nickName: string;
}

function createUserStore() {
    const { subscribe, set, update } = writable([
        { name: "Adrien", nickName: "The Boss" }, 
        { name: "Julien", nickName: "The Full Crack" },
        { name: "Nicolas", nickName: "The Crack" }, 
        { name: "Khaled", nickName: "The punisher" }
    ]);

    return {
        subscribe,
        addUser: (user: IUser) => update(state => [...state, user]),
        reset: () => set([])
    }
}

export const userStore = createUserStore();