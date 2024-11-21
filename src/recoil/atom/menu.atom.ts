import { atom } from "recoil";
import { v4 } from "uuid";

export const MenuAtom = atom({
    key: `menu${v4()}`,
    default: '',
})