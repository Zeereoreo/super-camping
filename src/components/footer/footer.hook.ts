import { useRecoilState } from 'recoil';
import { Item } from './../list/list.prop';
import { useState } from "react"
import { MenuAtom } from '@/src/recoil/atom/menu.atom';
import { useRouter } from 'next/navigation';

export function useFooterHook () {

    const [state, setState] = useState({})
    const [menuRecoil , setMenuRecoil] = useRecoilState(MenuAtom)
    const router = useRouter()
    const onClickedHomeListChange = (data:string) =>{
        setMenuRecoil([data])
        // router.push('/')
    }
    return {
        onClickedHomeListChange
    }
}