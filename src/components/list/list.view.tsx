
import { useRecoilValue } from "recoil";
import { ListProps } from "./list.prop";
import { ListStyle } from "./list.style";
import { MenuAtom } from "@/src/recoil/atom/menu.atom";
import { useEffect, useMemo, useState } from "react";
import { Pointer, StarIcon } from "lucide-react";
import { useListHook } from "./list.hook";
import { useRouter } from "next/router";
import Link from "next/link";
import styled from "styled-components";

export default function ListView({ data }: ListProps) {
    const { isFavorite, onFavoriteCheck, handleItemClick, selectedItem } = useListHook()



    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
                {Array.isArray(data) && data.map((list, i) => (
                    <ListStyle.List.Item key={i}>
                        <Link href={`/pages/${list.contentId}`}>
                            <ListStyle.List.Image $imageUrl={list.firstImageUrl} />
                            <h3>{list.facltNm}</h3>
                            <p>{list.lineIntro}</p>
                            <p>{list.induty}</p>
                        </Link>
                        <ListStyle.List.Button $isFavorite={isFavorite} onClick={() => handleItemClick(list)} />
                    </ListStyle.List.Item>
                ))}
            </ListStyle.List.Container>

        </ListStyle.Container>
    );
}
