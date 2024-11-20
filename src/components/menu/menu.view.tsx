import { useMenuHook } from "./menu.hook";
import { MenuStyle } from "./menu.style";


export default function MenuView(){
    const { onClickedListChange } = useMenuHook();

    return (
        <MenuStyle.Container>
            <MenuStyle.List.Container>
                <MenuStyle.List.Icon onClick={()=>onClickedListChange("일반야영장")}>auto camping</MenuStyle.List.Icon>
                <MenuStyle.List.Icon onClick={()=>onClickedListChange("글램핑")}>glamping</MenuStyle.List.Icon>
                <MenuStyle.List.Icon onClick={()=>onClickedListChange("카라반")}>caravan</MenuStyle.List.Icon>
                <MenuStyle.List.Icon onClick={()=>onClickedListChange("펜션")}>pension</MenuStyle.List.Icon>
            </MenuStyle.List.Container>
        </MenuStyle.Container>
    )
}
