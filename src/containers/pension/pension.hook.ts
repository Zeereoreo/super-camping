import { ListAtom } from "@/src/recoil/atom/list.atom";
import { MenuAtom } from "@/src/recoil/atom/menu.atom";
import { useRecoilValue } from "recoil";

export function usePensionHook(){
    const list = useRecoilValue(ListAtom)
    const selectedMenu = useRecoilValue(MenuAtom)

    const filteredList = selectedMenu && selectedMenu.length > 0
        ? list.filter((item) => {
            const itemTags = item.induty.split(','); 
            return selectedMenu.some(menu => itemTags.includes(menu));
        })
        : list;

    return{
        list,filteredList
    }
}