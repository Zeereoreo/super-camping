import { create } from "zustand";
import { Tag } from "@/src/constants/tags";

interface SearchState {
    date: string;
    searchName: string;
    people: {
        adult: number;
        child: number;
    };
    selectedTags: {
        accommodation: string[];
        facility: string[];
        activity: string[];
    };
    setDate: (date: string) => void;
    setSearchName: (name: string) => void;
    setPeople: (people: { adult: number; child: number }) => void;
    toggleTag: (tag: Tag) => void;
    clearTags: () => void;
}

const useSearch = create<SearchState>((set) => ({
    date: "",
    searchName: "",
    people: {
        adult: 0,
        child: 0
    },
    selectedTags: {
        accommodation: [],
        facility: [],
        activity: []
    },

    setDate: (date) => set({ date }),
    setSearchName: (name) => set({ searchName: name }),
    setPeople: (people) => set({ people }),
    toggleTag: (tag) => set((state) => {
        const category = tag.category;
        const currentTags = state.selectedTags[category];
        const isSelected = currentTags.includes(tag.id);

        return {
            selectedTags: {
                ...state.selectedTags,
                [category]: isSelected
                    ? currentTags.filter(id => id !== tag.id)
                    : [...currentTags, tag.id]
            }
        };
    }),
    clearTags: () => set({
        selectedTags: {
            accommodation: [],
            facility: [],
            activity: []
        }
    })
}));

export default useSearch;