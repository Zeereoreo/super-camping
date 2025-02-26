import { ListAtom } from "@/src/recoil/atom/list.atom";
import { useRecoilValue } from "recoil";

export function useSearchHook(){
    const list = useRecoilValue(ListAtom)

    return{list}
}