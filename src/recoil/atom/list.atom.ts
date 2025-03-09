import { CampingItem } from "@/src/type/camping.item";
import { atom } from "recoil";

export const ListAtom = atom<CampingItem[]>({
    key: 'ListAtom',
    default: []
});