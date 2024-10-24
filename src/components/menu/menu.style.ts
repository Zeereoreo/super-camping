import styled from "styled-components";

export namespace MenuStyle{
    export const Container = styled.div`
        display: flex;
        /* flex-direction: row; */
        border: 1px solid #000000;
        width: 100%;
        height: 10vh;
        min-height: 10vh;
    `;

    export namespace List{
        export const Container = styled.div`
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-evenly;
        `
        export const Icon = styled.div`
            border: 1px solid #000000;

        `
    }
}