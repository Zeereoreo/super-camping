import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "../home/home.style";
import FooterView from "@/src/components/footer/footer.view";
import ListView from "@/src/components/list/list.view";
import MenuView from "@/src/components/menu/menu.view";

export default function SearchView() {
    return (
        <HomeStyle.Container>
            <HeaderView />
            <MenuView />
            {/* <ListView data={list} /> */}
            <FooterView />
        </HomeStyle.Container>
    )
}