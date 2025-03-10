'use client'
import { ListAtom } from "@/src/recoil/atom/list.atom"
import { Suspense, use, useEffect } from "react"
import { useRecoilValue } from "recoil"
import { PageContainer } from "../../page.style";
import SidePageView from "@/src/containers/sidepage/sidepage.view";
import HeaderView from "@/src/components/header/header.view";
import MenuView from "@/src/components/menu/menu.view";
import DetailView from "@/src/containers/detail/detail.view";
import CaravanView from "@/src/containers/caravan/caravan.view";

export default function CaravanPage() {

    return (
        <Suspense>
            <PageContainer>
                <SidePageView />
                <CaravanView />
            </PageContainer>
        </Suspense>

    );
}