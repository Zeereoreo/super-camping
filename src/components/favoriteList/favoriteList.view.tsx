import { Link } from "lucide-react";
import { ListStyle } from "../list/list.style";
import { FavoriteListStyle } from "./favoriteList.style";
import useFavoriteListHook from "./favoriteList.hook";
import { useListHook } from "../list/list.hook";

export default function FavoriteListVeiw() {
    const { favoriteItems } = useListHook()
    console.log(favoriteItems)
    return (
        <FavoriteListStyle.Container>
            <ListStyle.List.Container>
                {Array.isArray(favoriteItems) && favoriteItems.map((list, i) => (
                    <ListStyle.List.Item key={i}>
                        <Link href={`/pages/${list.contentId}`}>
                            <ListStyle.List.Image $imageUrl={list.firstImageUrl} />
                            <h3>{list.facltNm}</h3>
                            <p>{list.lineIntro}</p>
                            <p>{list.induty}</p>
                        </Link>
                        {/* <ListStyle.List.Button $isFavorite={isFavorite} onClick={() => handleItemClick(list)} /> */}
                    </ListStyle.List.Item>
                ))}
            </ListStyle.List.Container>
        </FavoriteListStyle.Container>
    )
}