import { DetailHeaderStyle } from "./detail.header.style";

export default function DetailHeaderView() {
    return (
        <DetailHeaderStyle.Container>
            <DetailHeaderStyle.Button.Container>
                뒤로가기
            </DetailHeaderStyle.Button.Container>

            <DetailHeaderStyle.Button.Container>
                로고
            </DetailHeaderStyle.Button.Container>
            <DetailHeaderStyle.Button.Container>
                즐겨찾기
            </DetailHeaderStyle.Button.Container>
        </DetailHeaderStyle.Container>
    )
}