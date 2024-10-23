import styled from "styled-components";

export namespace FooterStyle{
    export const Container = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        border: 1px solid #000000;
    `;

    export namespace Header{
        export const Container = styled.div`
            border: 1px solid #000000;
        `
    }
}