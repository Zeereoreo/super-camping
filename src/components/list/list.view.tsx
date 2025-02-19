
import { useRecoilValue } from "recoil";
import { ListProps } from "./list.prop";
import { ListStyle } from "./list.style";
import { MenuAtom } from "@/src/recoil/atom/menu.atom";
import { useEffect, useMemo, useState } from "react";
import { Pointer, StarIcon } from "lucide-react";
import { useListHook } from "./list.hook";
import { useRouter } from "next/router";
import Link from "next/link";

export default function ListView({ data }: ListProps) {
    const {isFavorite,onFavoriteCheck} = useListHook()
    const [selectedItem, setSelectedItem] = useState(null);
    const handleItemClick = (item: any) => {
        setSelectedItem(item);
    };
    
    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
                {Array.isArray(data) && data.map((list, i) => (
                        <ListStyle.List.Item key={i}>
                            <Link
                            href={`${list.contentId}`}>
                            <ListStyle.List.Image imageUrl={list.firstImageUrl} />
                            <h3>{list.facltNm}</h3>
                            <p>{list.lineIntro}</p>
                            <p>{list.induty}</p>
                            <ListStyle.List.Button isFavorite={isFavorite} onClick={onFavoriteCheck} />
                            </Link>
                        </ListStyle.List.Item>
                ))}
            </ListStyle.List.Container>
            
        </ListStyle.Container>
    );
}
