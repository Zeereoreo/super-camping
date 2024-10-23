import { PropsWithChildren } from "react";
import { GlobalStyle } from "./global-style.style";

export function GlobalStyleProvider(props: PropsWithChildren) {
    return (
        <>
            <GlobalStyle />
            {props.children}
        </>
    );
}
