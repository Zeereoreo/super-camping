import { campingClient } from "@/src/infras/api";
import { CampingItem } from "@/src/type/camping.item";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMenuStore } from "@/src/zustand/store/menu.store";

export function useListHook(initialData: CampingItem[], isSearchResult?: boolean) {
    const selectedMenu = useMenuStore(state => state.selectedMenu);
    const [isFavorite, setIsFavorite] = useState(false);
    const [addList, setAddList] = useState<CampingItem[]>([]);
    const [favoriteItems, setFavoriteItems] = useState<CampingItem[]>([]);
    const [hasMore, setHasMore] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const pageRef = useRef(1);
    const observerRef = useRef<IntersectionObserver | null>(null);

    const onFavoriteCheck = () => {
        setIsFavorite(!isFavorite);
    };

    const fetchMoreData = useCallback(async () => {
        if (isSearchResult || !hasMore || isLoading) return;

        setIsLoading(true);
        const currentPage = pageRef.current;
        // console.log('Fetching page:', currentPage);

        const url = `/basedList?serviceKey=${process.env.NEXT_PUBLIC_SECRET_KEY}&numOfRows=10&pageNo=${currentPage}&MobileOS=ETC&MobileApp=AppTest&_type=json`;

        try {
            const response = await campingClient.get(url);
            const newItems = response.data.response.body.items.item || [];
            // console.log('New items:', newItems.length);

            if (newItems.length > 0) {
                setAddList(prev => {
                    const filteredNewItems = selectedMenu && selectedMenu.length > 0
                        ? newItems.filter((item: CampingItem) => {
                            const itemTags = item.induty.split(',');
                            return selectedMenu.some(menu => itemTags.includes(menu));
                        })
                        : newItems;
                    return [...prev, ...filteredNewItems];
                });
                pageRef.current += 1;
            } else {
                setHasMore(false);
            }

            if (newItems.length < 10) {
                setHasMore(false);
            }
        } catch (error) {
            console.error("❌ 추가 데이터 요청 에러:", error);
            setHasMore(false);
        } finally {
            setIsLoading(false);
        }
    }, [hasMore, isLoading, isSearchResult, selectedMenu]);

    useEffect(() => {
        if (initialData && initialData.length > 0) {
            const filteredData = selectedMenu && selectedMenu.length > 0
                ? initialData.filter((item: CampingItem) => {
                    const itemTags = item.induty.split(',');
                    return selectedMenu.some(menu => itemTags.includes(menu));
                })
                : initialData;
            
            setAddList(filteredData);
            if (isSearchResult) {
                setHasMore(false);
            } else {
                pageRef.current = 2;
                setHasMore(true);
            }
        }
    }, [initialData, isSearchResult, selectedMenu]);

    useEffect(() => {
        const storedFavorites = JSON.parse(localStorage.getItem("favoriteItems") || "[]");
        setFavoriteItems(storedFavorites);
    }, [isFavorite]);

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

    const lastItemRef = useCallback((node: HTMLDivElement | null) => {
        if (isSearchResult || !hasMore || !node) return;

        if (observerRef.current) {
            observerRef.current.disconnect();
        }

        observerRef.current = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting && hasMore && !isLoading) {
                    // console.log('Last item intersection detected');
                    fetchMoreData();
                }
            },
            {
                root: null,
                rootMargin: '100px',
                threshold: 0.1
            }
        );

        observerRef.current.observe(node);

        return () => {
            if (observerRef.current) {
                observerRef.current.disconnect();
            }
        };
    }, [hasMore, isLoading, fetchMoreData, isSearchResult]);

    return {
        onFavoriteCheck,
        handleItemClick,
        favoriteItems,
        addList,
        lastItemRef,
        isLoading
    };
}