import { atom } from "recoil";
import { v4 } from "uuid";

export const MenuAtom = atom<string[]>({
    key: `menu${v4()}`,
    default: [''],
})