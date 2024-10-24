import { MenuStyle } from "./menu.style";


export default function MenuView(){

    return (
        <MenuStyle.Container>
            <MenuStyle.List.Container>
                <MenuStyle.List.Icon>auto camping</MenuStyle.List.Icon>
                <MenuStyle.List.Icon>glamping</MenuStyle.List.Icon>
                <MenuStyle.List.Icon>caravan</MenuStyle.List.Icon>
                <MenuStyle.List.Icon>pension</MenuStyle.List.Icon>
            </MenuStyle.List.Container>
        </MenuStyle.Container>
    )
}
