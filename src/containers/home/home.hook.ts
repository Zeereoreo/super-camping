import axios, { Axios } from 'axios'
import {useEffect, useMemo, useState} from 'react'
import {campingClient} from "../../infras/api/index"
import { Item } from '@/src/components/list/list.prop';
import { useRecoilState, useRecoilValue } from 'recoil';
import { ListAtom } from '@/src/recoil/atom/list.atom';
import { MenuAtom } from '@/src/recoil/atom/menu.atom';

export function useHomeHook(){
    const [state, setState] =  useState<Item[]>([]);
    const [ list, setList ] = useRecoilState(ListAtom)
    const [isLoading, setIsLoading] = useState(true);

    // const selectedMenu = useRecoilValue(MenuAtom);
    // console.log(list)
    // const filteredList = useMemo(() => {
    //     if (!selectedMenu || selectedMenu.length === 0) return list;
    //     return list.filter(item => {
    //         const itemIndutyArray = item.induty.split(","); 
    //         return itemIndutyArray.some((e: string) => e === selectedMenu);
    //     });
    // }, [list, selectedMenu]);
    
    // console.log(filteredList, "필터리스트");
    
    const HomeList = async () => {
        const url = `/basedList?serviceKey=${process.env.NEXT_PUBLIC_SECRET_KEY}&numOfRows=2&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;
        
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
                console.log( response)
                setList(response)
                // setState(response); 
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
        // console.log(list)
    }, [setList])
    // console.log(list)
    return {
        state,
        list,
        isLoading
        // filteredList
    }
}