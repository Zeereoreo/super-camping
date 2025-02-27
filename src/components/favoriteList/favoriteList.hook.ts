import { CampingItem } from "@/src/type/camping.item";
import { ListType } from "@/src/type/list.type";
import { useEffect, useState } from "react";

export default function useFavoriteListHook(){
    const [favoriteItems, setFavoriteItems] = useState<CampingItem[]>([]);

    useEffect(() => {
        
        const storedFavorites = JSON.parse(localStorage.getItem("favoriteItems") || "[]");
        setFavoriteItems(storedFavorites);
        console.log(favoriteItems)
    }, []);

    return {favoriteItems}
}