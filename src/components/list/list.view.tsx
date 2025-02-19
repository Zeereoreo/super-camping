'use client'

import { useState } from "react";
import { ListStyle } from "./list.style";
import { ListType } from "@/src/type/list.type";
import { ListProps } from "./list.prop";
import { useRouter } from "next/router";

export default function ListView({ data }: ListProps) {
    const [selectedItem, setSelectedItem] = useState<ListType | null>(null);

    // 클릭된 항목을 selectedItem에 저장
    const handleItemClick = (item: ListType) => {
        setSelectedItem(item);
    };

    // 뒤로 가기 버튼 핸들러
    const handleBackClick = () => {
        setSelectedItem(null); // selectedItem을 null로 설정하여 목록으로 돌아감
    };

    return (
        <ListStyle.Container>
            {/* selectedItem이 없으면 목록을 렌더링하고, 있으면 상세 페이지를 렌더링 */}
            {!selectedItem ? (
                <ListStyle.List.Container>
                    {Array.isArray(data) && data.map((list, i) => (
                        <ListStyle.List.Item key={i} onClick={() => handleItemClick(list)}>
                            <ListStyle.List.Image imageUrl={list.firstImageUrl} />
                            <h3>{list.facltNm}</h3>
                            <p>{list.lineIntro}</p>
                            <p>{list.induty}</p>
                        </ListStyle.List.Item>
                    ))}
                </ListStyle.List.Container>
            ) : (
                <div>
                    <h2>{selectedItem.facltNm}</h2>
                    <p>{selectedItem.lineIntro}</p>
                    <p>{selectedItem.addr1}</p>

                    {/* 뒤로 가기 버튼 */}
                    <button onClick={handleBackClick}>뒤로 가기</button>
                </div>
            )}
        </ListStyle.Container>
    );
}
