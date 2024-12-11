
import { useRecoilValue } from "recoil";
import { ListProps } from "./list.prop";
import { ListStyle } from "./list.style";
import { MenuAtom } from "@/src/recoil/atom/menu.atom";
import { useEffect, useMemo, useState } from "react";
import { Pointer, StarIcon } from "lucide-react";
import { useListHook } from "./list.hook";
import { useRouter } from "next/router";

export default function ListView({ data }: ListProps) {
    const {isFavorite,onFavoriteCheck} = useListHook()
    const router = useRouter();
    const [isClient, setIsClient] = useState(false); 
    useEffect(() => {
        // 클라이언트에서만 useRouter 훅을 사용
        setIsClient(true);
    }, []);

    const handleItemClick = (itemId: string) => {
        if (isClient) {
            router.push(`/detail/${itemId}`);
        }
    };

    
    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
            {Array.isArray(data) && data.map((list, i) => (
                    <ListStyle.List.Item key={i}>
                        <ListStyle.List.Image imageUrl={list.firstImageUrl}/>
                        <h3>{list.facltNm}</h3>
                        <p>{list.lineIntro}</p>
                        <p>{list.induty}</p>
                        
                        <ListStyle.List.Button isFavorite={isFavorite} onClick={onFavoriteCheck} />
                    </ListStyle.List.Item>
                ))}

        
            </ListStyle.List.Container>
        </ListStyle.Container>
    );
}
