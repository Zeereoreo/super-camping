'use client'
import { ListAtom } from "@/src/recoil/atom/list.atom"
import { Suspense, use, useEffect } from "react"
import { useRecoilState, useRecoilValue } from "recoil"
import { PageContainer } from "../../page";
import SidePageView from "@/src/containers/sidepage/sidepage.view";
import HeaderView from "@/src/components/header/header.view";
import MenuView from "@/src/components/menu/menu.view";
import { DetailIdAtom } from "@/src/recoil/atom/detail.id.atom";
import DetailView from "@/src/containers/detail/detail.view";

export default function ListDetailPage({ params }: { params: { id: string } }) {
    const [id, setId] = useRecoilState(DetailIdAtom)
    useEffect(() => {

        setId(params.id)
    }, [])
    return (
        <Suspense>
            <PageContainer>
                <SidePageView />
                <DetailView />
            </PageContainer>
        </Suspense>

    );
}