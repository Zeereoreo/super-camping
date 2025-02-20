import Link from "next/link";
import { useFootHook } from "./footer.hook";
import { FooterStyle } from "./footer.style";


export default function FooterView() {
    // const { onClickedHomeListChange } = useFootHook();
    return (
        <FooterStyle.Container>
            <FooterStyle.List.Container>
                <Link href={`/`}>
                    <FooterStyle.List.Icon>home</FooterStyle.List.Icon>
                </Link>
                <Link href={`/search`}>
                    <FooterStyle.List.Icon>search</FooterStyle.List.Icon>
                </Link>
                <Link href={`/favorite`}>
                    <FooterStyle.List.Icon>favorite</FooterStyle.List.Icon>
                </Link>
                <Link href={`/mypage`}>
                    <FooterStyle.List.Icon>mypage</FooterStyle.List.Icon>
                </Link>
            </FooterStyle.List.Container>
        </FooterStyle.Container>
    )
}