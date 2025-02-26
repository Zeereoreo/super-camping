import Link from "next/link";
import { useMenuHook } from "./menu.hook";
import { MenuStyle } from "./menu.style";


export default function MenuView() {
    const { onClickedListChange } = useMenuHook();

    return (
        <MenuStyle.Container>
            <MenuStyle.List.Container>
                <Link href={`/pages/autocamping`} onClick={() => onClickedListChange(['일반야영장', '자동차야영장'])}>
                    <MenuStyle.List.Icon>auto camping</MenuStyle.List.Icon>
                </Link>
                <Link href={`/pages/glamping`} onClick={() => onClickedListChange(['글램핑'])}>
                    <MenuStyle.List.Icon >glamping</MenuStyle.List.Icon>
                </Link>
                <Link href={`/pages/caravan`} onClick={() => onClickedListChange(['카라반'])}>
                    <MenuStyle.List.Icon >caravan</MenuStyle.List.Icon>
                </Link>
                <Link href={`/pages/pension`} onClick={() => onClickedListChange(['펜션'])}>
                    <MenuStyle.List.Icon >pension</MenuStyle.List.Icon>
                </Link>
            </MenuStyle.List.Container>
        </MenuStyle.Container>
    )
}
