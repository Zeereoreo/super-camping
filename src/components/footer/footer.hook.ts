import { useRecoilState } from 'recoil';
import { Item } from './../list/list.prop';
import { useState } from "react"
import { MenuAtom } from '@/src/recoil/atom/menu.atom';
import { useRouter } from 'next/navigation';

export function useFootHook () {

    const [state, setState] = useState({})
    const [menuRecoil , setMenuRecoil] = useRecoilState(MenuAtom)
    const router = useRouter()
    const onClickedHomeListChange = (data:string) =>{
        console.log(`${data}`)
        setMenuRecoil(data)
        // router.push('/')
    }
    return {
        onClickedHomeListChange
    }
}