import { campingClient } from "@/src/infras/api";
import { CampingItem } from "@/src/type/camping.item";
import { useCallback, useEffect, useRef, useState } from "react";

export function useListHook(initialData: CampingItem[]) {
    const [isFavorite, setIsFavorite] = useState(false);
    const [addList, setAddList] = useState<CampingItem[]>([]);  // 초기 데이터 배열은 빈 배열로 설정
    const [favoriteItems, setFavoriteItems] = useState<CampingItem[]>([]);
    const [hasMore, setHasMore] = useState(true);
    const [isLoading, setIsLoading] = useState(false);

    const pageRef = useRef(1);  // 페이지 상태를 useRef로 관리
    const observer = useRef<IntersectionObserver | null>(null);

    const onFavoriteCheck = () => {
        setIsFavorite(!isFavorite);
    };

    // 데이터 추가 함수
    const fetchMoreData = useCallback(async () => {
        if (!hasMore || isLoading) return;

        setIsLoading(true);
        const url = `/basedList?serviceKey=${process.env.NEXT_PUBLIC_SECRET_KEY}&numOfRows=10&pageNo=${pageRef.current}&MobileOS=ETC&MobileApp=AppTest&_type=json`;

        try {
            const response = await campingClient.get(url);
            const newItems = response.data.response.body.items.item || [];

            setAddList(prev => [...prev, ...newItems]);  // 새로 받은 데이터를 기존 데이터에 추가
            pageRef.current += 1;  // 페이지 증가

            if (newItems.length < 10) setHasMore(false);  // 새로운 데이터가 10개 미만이면 더 이상 로딩하지 않음
        } catch (error) {
            console.error("❌ 추가 데이터 요청 에러:", error);
        } finally {
            setIsLoading(false);
        }
    }, [hasMore, isLoading]);

    // 데이터가 초기화될 때 한 번만 초기 데이터를 추가
    useEffect(() => {
        setAddList(initialData);  // 처음 데이터 로딩 시 초기 데이터 세팅
    }, [initialData]);

    // IntersectionObserver로 스크롤 끝을 감지하고 데이터 불러오기
    useEffect(() => {
        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore && !isLoading) {
                fetchMoreData();
            }
        });

        return () => observer.current?.disconnect();
    }, [hasMore, isLoading, fetchMoreData]);

    // 로컬스토리지에서 즐겨찾기 아이템 불러오기
    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favoriteItems") || "[]");
        setFavoriteItems(storedFavorites);
    }, [isFavorite]);

    // 즐겨찾기 아이템 처리
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

    // 마지막 아이템을 감지하는 ref
    const lastItemRef = useCallback((node: HTMLDivElement | null) => {
        if (!hasMore || isLoading) return;

        if (observer.current) observer.current.disconnect();

        observer.current = new IntersectionObserver(entries => {
            if (entries[0].isIntersecting && hasMore && !isLoading) {
                fetchMoreData();
            }
        });

        if (node) observer.current.observe(node);
    }, [hasMore, isLoading, fetchMoreData]);

    return {
        onFavoriteCheck,
        handleItemClick,
        favoriteItems,
        addList,  // 업데이트된 리스트 반환
        lastItemRef  // 마지막 아이템 ref 반환
    };
}
