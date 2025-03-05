import { useListHook } from "./list.hook";
import { ListProps } from "./list.prop";
import { ListStyle } from "./list.style";
import Link from "next/link";

export default function ListView({ data }: ListProps) {
    const { handleItemClick, favoriteItems, addList, lastItemRef } = useListHook(data);

    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
                {Array.isArray(addList) && addList.map((list, i) => (
                    <ListStyle.List.Item key={i} ref={i === addList.length - 1 ? lastItemRef : null}>
                        <Link href={`/pages/${list.contentId}`}>
                            <ListStyle.List.Image $imageUrl={list.firstImageUrl} />
                            <h3>{list.facltNm}</h3>
                            <p>{list.lineIntro}</p>
                            <p>{list.induty}</p>
                        </Link>
                        <ListStyle.List.Button
                            $isFavorite={favoriteItems.some(item => item.contentId === list.contentId)}
                            onClick={() => handleItemClick(list)} />
                    </ListStyle.List.Item>
                ))}
            </ListStyle.List.Container>
        </ListStyle.Container>
    );
}