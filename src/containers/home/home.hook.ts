import axios, { Axios } from 'axios'
import {useEffect, useState} from 'react'
import {campingClient} from "../../infras/api/index"
import { Item } from '@/src/components/list/list.prop';

export function useHomeHook(){
    const [state, setState] =  useState<Item[]>([]);

    
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
                console.log(response)
                setState(response); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
        // console.log(state)
    }, [])
    
    return {
        state 
    }
}