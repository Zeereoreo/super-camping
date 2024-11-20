import styled from "styled-components";

export namespace ListStyle{
    export const Container = styled.div`
        display: flex;
        flex-direction: column;
        margin-top: 0;
        /* border: 1px solid #000000; */
        width: 100%;
        height: 75vh;
        min-height: 70vh;
        overflow-y: auto;
        scroll-behavior: smooth;
    `;

    export namespace List{
        export const Container = styled.div`
            /* border: 1px solid #000000; */
            /* height: 500px; */
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: center;
            
        `

        export const Item = styled.div`
            border: 1px solid #000000;
            height: 30vh;
            min-height: 30vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
        `
    }
}