import { PropsWithChildren } from "react";
import { ThemeProvider as StyledComponentThemeProvider } from "styled-components";
import { useTheme } from "./theme.hook";

export function ThemeProvider(props: PropsWithChildren) {
    const { theme } = useTheme();

    return (
        <StyledComponentThemeProvider theme={theme}>
            {props.children}
        </StyledComponentThemeProvider>
    );
}
