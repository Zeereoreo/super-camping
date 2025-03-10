import Link from "next/link"
import { ListStyle } from "../list/list.style";
import { FavoriteListStyle } from "./favoriteList.style";
import useFavoriteListHook from "./favoriteList.hook";
import { useListHook } from "../list/list.hook";
import { useEffect } from "react";
import { CampingItem } from "@/src/type/camping.item";

export default function FavoriteListView() {
    const { favoriteItems, handleItemClick } = useListHook([], false);

    return (
        <FavoriteListStyle.Container>
            {favoriteItems && favoriteItems.map((item: CampingItem) => (
                <ListStyle.List.Item key={item.contentId}>
                    <Link href={`/pages/${item.contentId}`}>
                        <ListStyle.List.Image $imageUrl={item.firstImageUrl} />
                        <h3>{item.facltNm}</h3>
                        <p>{item.lineIntro}</p>
                        <p>{item.induty}</p>
                    </Link>
                    <ListStyle.List.Button
                        $isFavorite={true}
                        onClick={() => handleItemClick(item)} />
                </ListStyle.List.Item>
            ))}
        </FavoriteListStyle.Container>
    );
}