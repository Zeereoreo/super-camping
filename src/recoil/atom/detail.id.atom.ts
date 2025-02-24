import { Item } from "@/src/components/list/list.prop";
import { CampingItem } from "@/src/type/camping.item";
import { atom } from "recoil";
import { v4 } from "uuid";

export const DetailIdAtom = atom({
    key: `id${v4()}`,
    default: ''
    ,

})