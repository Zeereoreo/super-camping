
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
    const handleItemClick = (item: never) => {
        console.log(item)
        setSelectedItem(item);
    };
    
    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
                {Array.isArray(data) && data.map((list, i) => (
                        <ListStyle.List.Item key={i} onClick={() => handleItemClick(list)}>
                            {/* <Link
                            href={`${list.contentId}`}> */}
                            <ListStyle.List.Image imageUrl={list.firstImageUrl} />
                            <h3>{list.facltNm}</h3>
                            <p>{list.lineIntro}</p>
                            <p>{list.induty}</p>
                            <ListStyle.List.Button isFavorite={isFavorite} onClick={onFavoriteCheck} />
                            {/* </Link> */}

                        </ListStyle.List.Item>

                ))}
            </ListStyle.List.Container>
            {selectedItem && (
            <div>
                <h2>{selectedItem.facltNm}</h2> {/* 객체 속성 값만 출력 */}
                <p>{selectedItem.lineIntro}</p> {/* 다른 속성도 마찬가지로 */}
                <p>{selectedItem.addr1}</p> {/* 예시로 주소 추가 */}
                {/* 선택된 항목에 대한 다른 속성들도 원하는 대로 렌더링 */}
            </div>
        )}
        </ListStyle.Container>
    );
}
