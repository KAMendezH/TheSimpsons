import { create } from "zustand";
// TYPES    
import type { ModalTypes } from "../Types/Types";

const useModalStore = create<ModalTypes>(set=>({
    statusModal: false,
    modalActive: () => set(()=>({statusModal: true})),
    modalHidden: () => set(() =>({statusModal: false})),
    dataModal: {
        id: 0,
        name: "unknown",
        occupation: "unknown",
        phrases: [],
        age: "unknown",
        status: "unknown",
        gender: "",
        birthdate: "unknown",
        img: ""
    },
    setData: (data) => set((state) => ({
        dataModal: { ...state.dataModal, ...data }
    }))
}));

export default useModalStore;