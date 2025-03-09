'use client'

import { useState, useEffect, useRef } from "react";
import { useRecoilValue } from "recoil";
import { ListAtom } from "@/src/recoil/atom/list.atom";
import { CampingItem } from "@/src/type/camping.item";

export function useSearchListHook() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [homeWidth, setHomeWidth] = useState(0);
    const list = useRecoilValue<CampingItem[]>(ListAtom);
    const homeViewRef = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        if (homeViewRef.current) {
            setHomeWidth(homeViewRef.current.offsetWidth);
        }
    }, []);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return {
        isModalOpen,
        toggleModal,
        homeViewRef,
        homeWidth,
        list
    };
}
