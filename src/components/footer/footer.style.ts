import styled from "styled-components";

export namespace FooterStyle{
    export const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        border: 1px solid #000000;
        height: 10vh;
        min-height: 10vh;
        width: 100%;
    `;

    export namespace List{
        export const Container = styled.div`
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: space-evenly;
            align-items: center;
            height: 100%;
        `
        export const Icon = styled.div`
            border: 1px solid #000000;
            display: flex;
            align-items: center;
            /* width: 7vh;
            height: 100%; */
            cursor: pointer;
        `
    }
}