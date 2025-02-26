import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "../home/home.style";
import MenuView from "@/src/components/menu/menu.view";
import ListView from "@/src/components/list/list.view";
import FooterView from "@/src/components/footer/footer.view";

import { useHomeHook } from "../home/home.hook";
import { usePensionHook } from "./pension.hook";


export default function PensionView() {
    const { list, filteredList } = usePensionHook()
    const { isLoading } = useHomeHook();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <HomeStyle.Container>
            <HeaderView />
            <MenuView />
            <ListView data={filteredList} />
            <FooterView />
        </HomeStyle.Container>
    )
}