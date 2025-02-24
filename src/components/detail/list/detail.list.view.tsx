import { useHomeHook } from "@/src/containers/home/home.hook"
import { ListAtom } from "@/src/recoil/atom/list.atom"
import { useEffect } from "react";
import { useRecoilValue } from "recoil"
import { useDetailListHook } from "./detail.list.hook";
import ListView from "../../list/list.view";
import { DetailIdAtom } from "@/src/recoil/atom/detail.id.atom";
import { DetailListStyle } from "./detail.list.style";
import DetailHeaderView from "../header/detail.header";




export default function DetailListView() {
    const listItem = useDetailListHook()


    const { isLoading } = useHomeHook();

    if (isLoading) {
        return <p>Loding...</p>
    }


    return (
        <DetailListStyle.Constainer>
            <DetailHeaderView />
            <DetailListStyle.Header.HeaderImg imageUrl={listItem?.firstImageUrl ?? ""} />
            <DetailListStyle.Body.Container>
                <DetailListStyle.Body.Tag>{listItem?.induty}</DetailListStyle.Body.Tag>
                <DetailListStyle.Body.Title>{listItem?.facltNm}</DetailListStyle.Body.Title>
            </DetailListStyle.Body.Container>
        </DetailListStyle.Constainer>
    )
}