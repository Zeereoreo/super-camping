'use client'
import { ListAtom } from "@/src/recoil/atom/list.atom"
import { Suspense, use, useEffect } from "react"
import { useRecoilValue } from "recoil"
import { PageContainer } from "../../page";
import SidePageView from "@/src/containers/sidepage/sidepage.view";
import HeaderView from "@/src/components/header/header.view";
import MenuView from "@/src/components/menu/menu.view";
import DetailView from "@/src/containers/detail/detail.view";
import GlampingView from "@/src/containers/glamping/glamping.view";

export default function GlampingPage() {

    return (
        <Suspense>
            <PageContainer>
                <SidePageView />
                <GlampingView />
            </PageContainer>
        </Suspense>

    );
}