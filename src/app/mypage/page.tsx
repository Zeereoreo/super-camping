'use client'

import { Suspense } from "react";
import { PageContainer } from "../page.style";
import SidePageView from "@/src/containers/sidepage/sidepage.view";
import SearchView from "@/src/containers/search/search.view";
import FavoriteView from "@/src/containers/favorite/favorite.view";

export default function MyPagePage() {
    return (
        <Suspense>
            <PageContainer>
                <SidePageView />
                <div>준비 중..</div>
            </PageContainer>
        </Suspense>
    )
}