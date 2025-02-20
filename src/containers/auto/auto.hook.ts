import { ListAtom } from "@/src/recoil/atom/list.atom";
import { useRecoilValue } from "recoil";

export function useAutoHook(){
    const list = useRecoilValue(ListAtom)
    console.log(list)

    return(
        list
    )
}