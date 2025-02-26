import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "../home/home.style";
import FooterView from "@/src/components/footer/footer.view";
import ListView from "@/src/components/list/list.view";
import MenuView from "@/src/components/menu/menu.view";
import { useSearchHook } from "./search.hook";
import SearchListView from "@/src/components/searchList/searchList.view";

export default function SearchView() {
    const { list } = useSearchHook()
    return (
        <HomeStyle.Container>
            <HeaderView />
            <SearchListView />
            <ListView data={list} />
            <FooterView />
        </HomeStyle.Container>
    )
}