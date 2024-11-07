import axios, { Axios } from 'axios'
import {useEffect, useState} from 'react'
import {campingClient} from "../../infras/api/index"
import { Item } from '@/src/components/list/list.prop';

export function useHomeHook(){
    const [state, setState] =  useState<Item[]>([]);

    const HomeList = async ()  => {
        const url = `?serviceKey=${process.env.SECRET_KEY}&numOfRows=${1}&pageNo=${1}&MobileOs=ETC&_type=json`
        return campingClient.get(url)
    }

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