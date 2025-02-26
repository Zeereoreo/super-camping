import { useState, useEffect, useRef } from "react";

export function useSearchListHook() {
    const [dateRange, setDateRange] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [homeWidth, setHomeWidth] = useState(0);
    const homeViewRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const today = new Date();
        const tomorrow = new Date();
        tomorrow.setDate(today.getDate() + 1);

        
        const dayNames = ['일', '월', '화', '수', '목', '금', '토'];

        
        const formatDate = (date: Date) => {
            const month = String(date.getMonth() + 1).padStart(2, '0'); 
            const day = String(date.getDate()).padStart(2, '0');
            const dayName = dayNames[date.getDay()];
            return `${month}.${day}(${dayName})`;
        };

        
        const todayStr = formatDate(today);
        const tomorrowStr = formatDate(tomorrow);

        
        setDateRange(`${todayStr} - ${tomorrowStr}`);

        if (homeViewRef.current) {
            setHomeWidth(homeViewRef.current.offsetWidth);
        }
    }, []);
    const toggleModal = () => {
        setIsModalOpen(prev => !prev);
        console.log(homeWidth)
    };
    return {
        dateRange, isModalOpen,
        toggleModal,homeViewRef,homeWidth
    };
}
