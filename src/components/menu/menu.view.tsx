import Link from "next/link";
import { useMenuHook } from "./menu.hook";
import { MenuStyle } from "./menu.style";


export default function MenuView() {
    const { onClickedListChange } = useMenuHook();

    return (
        <MenuStyle.Container>
            <MenuStyle.List.Container>
                <Link href={`/pages/autocamping`}>
                    <MenuStyle.List.Icon>auto camping</MenuStyle.List.Icon>
                </Link>
                <Link href={`/pages/glamping`}>
                    <MenuStyle.List.Icon >glamping</MenuStyle.List.Icon>
                </Link>
                <Link href={`/pages/caravan`}>
                    <MenuStyle.List.Icon >caravan</MenuStyle.List.Icon>
                </Link>
                <Link href={`/pages/pension`}>
                    <MenuStyle.List.Icon >pension</MenuStyle.List.Icon>
                </Link>
            </MenuStyle.List.Container>
        </MenuStyle.Container>
    )
}
