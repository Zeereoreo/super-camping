import { media } from "@/src/providers/theme/constants/media";
import styled from "styled-components";

export namespace SidePageStyle{
    export const Container = styled.div`
        display: flex;
        flex-direction: column;
        /* justify-content: space-between; */
        width: 40vh;
        min-width: 40vh;
        height: 100vh;
        min-height: 100vh;
        border: 1px solid #000000;
        
        ${media.width({
            small:`
                display : none;
            `
        })}
    `;

    export namespace Header{
        export const Container = styled.div`
            
        `
    }
}