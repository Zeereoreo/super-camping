import {useState} from 'react'


export function useHeaderHook(){
    const [state, setState] = useState()

    const onClickedMainPage = ()=>{
        
    }

    return {
        onClickedMainPage
    }
}