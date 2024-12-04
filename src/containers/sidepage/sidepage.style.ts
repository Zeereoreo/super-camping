
import { media } from "@/src/providers/theme/constants/media";
import styled from "styled-components";

export namespace SidePageStyle{
    export const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 40vh;
        min-width: 40vh;
        height: 100vh;
        min-height: 100vh;
        border: 1px solid #000000;
        background-color: #DCE8D0;
        ${media.width({
            small:`
                display : none;
            `
        })}
    `;

    export namespace Header{
        export const Container = styled.div`
            width: 100%;
        `

        export const Logo = styled.div`
            width: 100%;
            height: auto;
            aspect-ratio: 1/1;
            background-image: url('/images/sp_logo.png');
            background-size: contain;
            background-repeat: no-repeat;
            background-position: center;
        `
    }

    export namespace Body{
        export const Container = styled.div`
            /* background-color: #DCE8D0; */
        `
        
    }
}