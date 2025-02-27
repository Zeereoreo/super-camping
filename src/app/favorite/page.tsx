'use client'

import { Suspense } from "react";
import { PageContainer } from "../page";
import SidePageView from "@/src/containers/sidepage/sidepage.view";
import SearchView from "@/src/containers/search/search.view";
import FavoriteView from "@/src/containers/favorite/favorite.view";

export default function FavoritePage() {
    return (
        <Suspense>
            <PageContainer>
                <SidePageView />
                <FavoriteView />
            </PageContainer>
        </Suspense>
    )
}