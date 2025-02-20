import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "../home/home.style";
import MenuView from "@/src/components/menu/menu.view";
import ListView from "@/src/components/list/list.view";
import FooterView from "@/src/components/footer/footer.view";
import { useAutoHook } from "./auto.hook";
import { useHomeHook } from "../home/home.hook";

export default function AutoView() {
    const list = useAutoHook()
    const { isLoading } = useHomeHook();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <HomeStyle.Container>
            <HeaderView />
            <MenuView />
            <ListView data={list} />
            <FooterView />
        </HomeStyle.Container>
    )
}