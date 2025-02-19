'use client'

import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "./home.style";
import ListView from "@/src/components/list/list.view";
import FooterView from "@/src/components/footer/footer.view";
import MenuView from "@/src/components/menu/menu.view";
import SidePageView from "../sidepage/sidepage.view";
import { useMemo } from "react";
import { useHomeHook } from "./home.hook";
import { useRecoilValue } from "recoil";
import { MenuAtom } from "@/src/recoil/atom/menu.atom";

export default function HomeView() {
    const {state,list} = useHomeHook();
    
    return (
            <HomeStyle.Container>
                <HeaderView />
                <MenuView />
                <ListView data = {list}/>
                <FooterView />
            </HomeStyle.Container>
    )
}