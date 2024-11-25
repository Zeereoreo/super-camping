import { useRecoilState } from 'recoil';
import { Item } from './../list/list.prop';
import { useState } from "react"
import { MenuAtom } from '@/src/recoil/atom/menu.atom';

export function useFootHook () {

    const [state, setState] = useState({})
    const [menuRecoil , setMenuRecoil] = useRecoilState(MenuAtom)
    
    const onClickedHomeListChange = (data:string) =>{
        console.log(`${data}`)
        setMenuRecoil(data)
    }
    return {
        onClickedHomeListChange
    }
}