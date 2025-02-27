import HeaderView from "@/src/components/header/header.view";
import { HomeStyle } from "../home/home.style";
import FooterView from "@/src/components/footer/footer.view";
import ListView from "@/src/components/list/list.view";
import MenuView from "@/src/components/menu/menu.view";
import SearchListView from "@/src/components/searchList/searchList.view";
import { useHomeHook } from "../home/home.hook";
import { useFavoriteHook } from "./favorite.hook";
import FavoriteListVeiw from "@/src/components/favoriteList/favoriteList.view";

export default function FavoriteView() {
    const { list } = useFavoriteHook()
    const { isLoading } = useHomeHook();
    if (isLoading) {
        return <p>Loading...</p>;
    }
    return (
        <HomeStyle.Container>
            <HeaderView />
            {/* <SearchListView /> */}
            <FavoriteListVeiw />
            <FooterView />
        </HomeStyle.Container>
    )
}