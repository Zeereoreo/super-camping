import styled from "styled-components";

export namespace ListStyle{
    export const Container = styled.div`
        /* display: flex;
        flex-direction: column; */
        border: 1px solid #000000;
        height: 80vh;
    `;

    export namespace List{
        export const Container = styled.div`
            /* border: 1px solid #000000; */
            height: 500px;
            display: flex;
        `
    }
}