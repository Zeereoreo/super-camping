import { CampingItem } from "@/src/type/camping.item";
import { ListType } from "@/src/type/list.type";
import { useEffect, useMemo, useState } from "react";


export function useListHook(){

    const [isFavorite , setIsFavorite] = useState(false)
    const [favoriteItems, setFavoriteItems] = useState<CampingItem[]>([]);
    const onFavoriteCheck = () =>{
        setIsFavorite(!isFavorite)
    }
    const [selectedItem, setSelectedItem] = useState<CampingItem>();

    const handleItemClick = (item: CampingItem) => {
        setFavoriteItems(prev => {
            const updatedFavorites = [...prev, item];
            // 로컬 스토리지에 저장
            localStorage.setItem("favoriteItems", JSON.stringify(updatedFavorites));
            return updatedFavorites;
        });
    };
    
    useEffect(() => {
        
        const storedFavorites = JSON.parse(localStorage.getItem("favoriteItems") || "[]");
        setFavoriteItems(storedFavorites);
    }, [isFavorite]);

    return {
        isFavorite, onFavoriteCheck,handleItemClick,selectedItem,favoriteItems
    }
}