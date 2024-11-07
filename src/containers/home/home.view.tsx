import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "./home.style";
import ListView from "@/src/components/list/list.view";
import FooterView from "@/src/components/footer/footer.view";
import MenuView from "@/src/components/menu/menu.view";
import SidePageView from "../sidepage/sidepage.view";
import { useMemo } from "react";
import { useHomeHook } from "./home.hook";

export default function HomeView() {
    const {state} = useHomeHook();
    const OnClickedHome = useMemo(() =>{
        return (type : any) => () => {

        };
    },[])
    // console.log(state);
    return (
            <HomeStyle.Container>
                <HeaderView />
                <MenuView />
                <ListView data = {state}/>
                <FooterView />
            </HomeStyle.Container>
    )
}