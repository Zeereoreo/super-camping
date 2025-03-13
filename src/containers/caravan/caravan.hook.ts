import { ListAtom } from "@/src/recoil/atom/list.atom";
import { MenuAtom } from "@/src/recoil/atom/menu.atom";
import { useMenuStore } from "@/src/zustand/store/menu.store";
import { useRecoilValue } from "recoil";

export function useCaravanHook(){
    const list = useRecoilValue(ListAtom)
    // const selectedMenu = useRecoilValue(MenuAtom)
    // console.log(list)
    const selectedMenu = useMenuStore(state => state.selectedMenu)

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