import { Item } from "@/src/components/list/list.prop";
import { atom } from "recoil";
import { v4 } from "uuid";

export const ListAtom = atom({
    key: `listAtom`,
    default: []
        // pages: 0,
        // list: <Item[]>{},
    ,

})