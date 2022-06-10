import create from "zustand";

const uiStore = create(set => ({
    isModalOpen: false,
    isFeaturesMenuOpen: false,
    isCompanyMenuOpen: false,
    toggleModalOpen : () => set(state=>({isModalOpen: !state.isModalOpen})),
    toggleFeaturesMenuOpen: () =>set(state=>({isFeaturesMenuOpen: !state.isFeaturesMenuOpen})),
    toggleCompanyMenuOpen: ()=>set(state=>({isCompanyMenuOpen: !state.isCompanyMenuOpen}))
}))

export default uiStore;