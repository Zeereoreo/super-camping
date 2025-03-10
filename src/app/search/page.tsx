'use client'

import { Suspense } from "react";
import { PageContainer } from "../page.style";
import SidePageView from "@/src/containers/sidepage/sidepage.view";
import SearchView from "@/src/containers/search/search.view";

export default function SearchPage() {
    return (
        <Suspense>
            <PageContainer>
                <SidePageView />
                <SearchView />
            </PageContainer>
        </Suspense>
    )
}