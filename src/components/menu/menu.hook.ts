import { Item } from './../list/list.prop';
import { useState } from "react"

export function useMenuHook () {

    const [state, setState] = useState({})
    
    const onClickedListChange = (data:string) =>{
        console.log(`${data}`)
        
    }
    return {
        onClickedListChange
    }
}