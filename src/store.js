import create from "zustand";

const modalStore = create(set => ({
    isModalOpen: false,
    toggleModalOpen : () => set(state=>({isModalOpen: !state.isModalOpen}))
}))

export default modalStore;