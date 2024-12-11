import { useMemo, useState } from "react";


export function useListHook(){

    const [isFavorite , setIsFavorite] = useState(false)

    const onFavoriteCheck = () =>{
        setIsFavorite(!isFavorite)
    }

    return {
        isFavorite, onFavoriteCheck
    }
}