'use client'

import { useRecoilState } from "recoil";
import { ListAtom } from "@/src/recoil/atom/list.atom";
import { useState, useEffect } from "react";
import { CampingItem } from "@/src/type/camping.item";
import { campingClient } from "@/src/infras/api";

export function useHomeHook() {
    const [state, setState] = useState<CampingItem[]>([]);
    const [list, setList] = useRecoilState(ListAtom);
    const [isLoading, setIsLoading] = useState(false);

    // const selectedMenu = useRecoilValue(MenuAtom);

    const HomeList = async () => {
        const url = `/basedList?serviceKey=${process.env.NEXT_PUBLIC_SECRET_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;
        
        try {
            const response = await campingClient.get(url);
            return response.data.response.body.items.item;
        } catch (error) {
            console.error("API 요청 에러:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await HomeList();
                setList(response);
                setState(response);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        }

        if (!list || list.length === 0) {
            fetchData();
        } else {
            setIsLoading(false);
        }
    }, [setList, list]);

    return {
        state,
        list,
        isLoading
    };
}