import { media } from "@/src/providers/theme/constants/media";
import styled from "styled-components";

export namespace HomeStyle{
    export const Container = styled.div`
        display: flex;
        flex-direction: column;
        width: 50vh;
        min-width: 40vh;
        /* height: 100vh; */
        /* min-height: 100vh; */
        border: 1px solid #000000;
        justify-content: center;
        align-items: center;
        ${media.width({
            small:`
                
            `
        })}
    `;

    export namespace Header{
        export const Container = styled.div`
            
        `
    }
}