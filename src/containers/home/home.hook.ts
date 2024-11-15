import axios, { Axios } from 'axios'
import {useEffect, useState} from 'react'
import {campingClient} from "../../infras/api/index"
import { Item } from '@/src/components/list/list.prop';

export function useHomeHook(){
    const [state, setState] =  useState<Item[]>([]);
    const SECRET_KEY = process.env.SECRET_KEY || "%2BPnRJoZ%2FqDJge4VIR%2BdEaIx4vj5SOgOZng%2BbDyn0vYDd8g3bOsFGrGQF%2BdMB%2FI2rT1JKOHVx1LnoEJdg81ELDA%3D%3D";
    const PUBLIC_END_POINT = process.env.PUBLIC_END_POINT || "http://apis.data.go.kr/B551011/GoCamping";
    
    const HomeList = async () => {
        const url = `/basedList?serviceKey=${process.env.SECRET_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json`;
        
        try {
            const response = await campingClient.get(url);
            return response.data;
        } catch (error) {
            console.error("API 요청 에러:", error);
            throw error;
        }
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await HomeList();
                setState(response.data); 
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, [])
    
    return {
        state 
    }
}