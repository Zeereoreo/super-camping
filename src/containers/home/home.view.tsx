import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "./home.style";
import ListView from "@/src/components/list/list.view";
import FooterView from "@/src/components/footer/footer.view";
import MenuView from "@/src/components/menu/menu.view";
import SidePageView from "../sidepage/sidepage.view";

export default function HomeView() {

    return (
            <HomeStyle.Container>
                <HeaderView />
                <MenuView />
                <ListView />
                <FooterView />
            </HomeStyle.Container>
    )
}