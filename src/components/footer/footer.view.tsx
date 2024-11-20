import { FooterStyle } from "./footer.style";


export default function FooterView(){

    return (
        <FooterStyle.Container>
            <FooterStyle.List.Container>
                <FooterStyle.List.Icon>home</FooterStyle.List.Icon>
                <FooterStyle.List.Icon>search</FooterStyle.List.Icon>
                <FooterStyle.List.Icon>favorite</FooterStyle.List.Icon>
                <FooterStyle.List.Icon>my</FooterStyle.List.Icon>
            </FooterStyle.List.Container>
        </FooterStyle.Container>
    )
}