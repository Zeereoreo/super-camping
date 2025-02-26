import { useRecoilState } from 'recoil';
import { Item } from './../list/list.prop';
import { useState } from "react"
import { MenuAtom } from '@/src/recoil/atom/menu.atom';

export function useMenuHook () {

    const [state, setState] = useState({})
    const [menuRecoil , setMenuRecoil] = useRecoilState(MenuAtom)
    
    const onClickedListChange = (data:string[]) =>{
        console.log(data)
        setMenuRecoil(data)
    }
    return {
        onClickedListChange
    }
}