import { create } from "zustand";

// TYPES
import type { Character } from "../Types/Types";

interface useDataStoreTypes{
    data:  Character[],
    addCharacter: (newCharacter: Character) => void
}

const useDataStore = create<useDataStoreTypes>((set) => ({
    data:[],
    addCharacter: (newData) =>
  set((state) => ({
    data: state.data.some((char) => char.id === newData.id)
      ? state.data
      : [...state.data, newData],
  })),   
}));

export default useDataStore;