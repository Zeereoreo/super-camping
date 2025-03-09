'use client';

import { useRecoilValue } from "recoil";
import { ListAtom } from "@/src/recoil/atom/list.atom";
import { useEffect, useState } from "react";
import { CampingItem } from "@/src/type/camping.item";

export function useSearchHook() {
    const searchResults = useRecoilValue(ListAtom);
    const [displayedList, setDisplayedList] = useState<CampingItem[]>([]);
    
    useEffect(() => {
        console.log('Search 페이지 - 새로운 검색 결과 수신:', searchResults.length);
        setDisplayedList(searchResults);
    }, [searchResults]);

    // 무한 스크롤 관련 함수들을 제거하고 검색 결과만 반환
    return { 
        list: displayedList,
        isLoading: false,
        hasMore: false,
        lastItemRef: null // 무한 스크롤 ref 비활성화
    };
}