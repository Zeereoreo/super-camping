import { CampingItem } from "@/src/type/camping.item";

export interface Item {
    contentId: string;
    facltNm: string;
    lineIntro: string;
    induty: string;
}

export interface ListProps {
    data:CampingItem[];
}