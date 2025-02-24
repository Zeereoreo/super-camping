import { DetailIdAtom } from "@/src/recoil/atom/detail.id.atom";
import { ListAtom } from "@/src/recoil/atom/list.atom";
import { useEffect } from "react";
import { useRecoilValue } from "recoil";

export function useDetailListHook(){
    const list = useRecoilValue(ListAtom)
    const id = useRecoilValue(DetailIdAtom)
    const listItem = list.find(item => item.contentId === id);


    

    return(
        listItem
    )
}