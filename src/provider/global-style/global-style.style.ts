import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyle = createGlobalStyle`

    ${reset}

    * {
        ${({ theme }) => `
            box-sizing : border-box;
            font-size: ${theme.config.fontSize};
            font-family: ${theme.fonts.inter} important!;
            background-color: #ffffff;
        `}
    }
`;
