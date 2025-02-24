import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "../home/home.style";
import MenuView from "@/src/components/menu/menu.view";
import FooterView from "@/src/components/footer/footer.view";
import DetailListView from "@/src/components/detail/list/detail.list.view";

export default function DetailView() {
    return (
        <HomeStyle.Container>
            {/* <HeaderView />
            <MenuView /> */}
            <DetailListView />
            <FooterView />
        </HomeStyle.Container>
    )
}