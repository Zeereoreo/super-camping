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
            const updatedFavorites = [...prev];
            const itemIndex = updatedFavorites.findIndex(favorite => favorite.contentId === item.contentId);

            if (itemIndex !== -1) {
                updatedFavorites.splice(itemIndex, 1);
            } else {
                updatedFavorites.push(item);
            }

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