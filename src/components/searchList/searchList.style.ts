import styled from "styled-components";

export namespace SearchListStyle{
    export const Container = styled.div`
        display: flex;
        /* flex-direction: row; */
        border: 1px solid #000000;
        width: 100%;
        height: 10vh;
        min-height: 10vh;
        position: relative;
        overflow: hidden;
    `;

    export namespace List{
        export const Container = styled.div`
            display: flex;
            width: 100%;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            padding: 10px;
        `
        export const Porm = styled.div`
            border: 1px solid #F5F5F5;
            background-color: #F5F5F5;
            width: 95%;
            height: 80%;
            display: flex;
            flex-direction: row;
            cursor: pointer;
        `
        export const Date = styled.div`
            width: 80%;
            background-color: #F5F5F5;
        `

        export const Icon = styled.div`
            border: 1px solid #000000;
            cursor: pointer;
            background-color: #F5F5F5;
            width: 20%;
        `

        export const ModalContainer = styled.div<{ $isOpen: boolean; width: number }>`
        position: fixed;
        display: ${(props) => (props.$isOpen ? 'block' : 'none')};
        bottom: 0;
        height: 100%;
        /* left: 50%; */
        transform: translateX(-50%);
        width: ${props => props.width ? `${props.width * 0.99}px` : '100%'};  
        max-width: 100vw;  
        background: white;
        box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
        transform: translateY(${props => props.$isOpen ? '0' : '100%'});
        z-index: 999;
        `

        export const ModalContent = styled.div`
        padding: 20px;
        `

    }
}