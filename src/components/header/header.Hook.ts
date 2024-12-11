
import { useRouter } from 'next/navigation'
import {useState} from 'react'


export function useHeaderHook(){
    const [state, setState] = useState()
    const router = useRouter();

    const onClickedMainPage = ()=>{
        // console.log("home")
        // router.push("/search")
    }

    return {
        onClickedMainPage
    }
}