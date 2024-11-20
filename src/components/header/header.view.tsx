

import { useHeaderHook } from "./header.hook";
import { HeaderStyle } from "./header.style";

export default function HeaderView(){
    const {onClickedMainPage} = useHeaderHook();


    return (
        <HeaderStyle.Container>
            <HeaderStyle.Logo.Container onClick={onClickedMainPage}>
                <HeaderStyle.Logo.Image>
                    Logo
                </HeaderStyle.Logo.Image>
            </HeaderStyle.Logo.Container>
            <HeaderStyle.Login.Container>
                <HeaderStyle.Login.Image>
                    login
                </HeaderStyle.Login.Image>
            </HeaderStyle.Login.Container>
        </HeaderStyle.Container>
    )
}