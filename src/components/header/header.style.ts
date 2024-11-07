
import styled from "styled-components";

export namespace HeaderStyle{
    export const Container = styled.div`
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid #000000;
        width: 100%;
        min-height: 5vh;
        height: 5vh;
    `;

    export namespace Logo{
        export const Container = styled.div`
            border: 1px solid #000000;
        `
        export const Image = styled.div`
            
        `
    }

    export namespace Login{
        export const Container = styled.div`
            border: 1px solid #000000;
        
        `
        export const Image = styled.div`
        
        `


    }
}