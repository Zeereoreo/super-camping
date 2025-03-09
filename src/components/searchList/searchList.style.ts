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
    }
    export namespace Modal{
        export const Container = styled.div<{ $isOpen: boolean; width: number }>`
            position: fixed;
            visibility: ${props => props.$isOpen ? 'visible' : 'hidden'};
            opacity: ${props => props.$isOpen ? 1 : 0};
            bottom: 0;
            height: 100%;
            transform: translateY(${props => props.$isOpen ? '0' : '100%'});
            width: ${props => props.width ? `${props.width * 1}px` : '100%'};  
            max-width: 100vw;  
            background: white;
            box-shadow: 0 -5px 10px rgba(0, 0, 0, 0.1);
            transition: all 0.3s ease;
            z-index: 999;
            overflow-y: auto;
        `

        export const SearchName = styled.input`
            border: 1px solid #000000;
            background-color: #F5F5F5;
            width: 100%;
            height: 7%;
            cursor: pointer;
        `

        export const Content = styled.div`
            padding: 20px;
            border: 1px solid #000000;
            background-color: #F5F5F5;
            width: 100%;
            height: 100%;
            cursor: pointer;
        `

        export const Title = styled.h2`
            font-size: 20px;
            font-weight: bold;
            border: 1px solid #000000;
            background-color: #F5F5F5;
            width: 100%;
            height: 3%;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        `

        export const Date = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border: 1px solid #000000;
            background-color: #F5F5F5;
            width: 100%;
            height: 7%;
            cursor: pointer;
        `

        export const People = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            border: 1px solid #000000;
            background-color: #F5F5F5;
            width: 100%;
            height: 15%;
            cursor: pointer;
        `

        export const CloseButton = styled.p`
            border: 1px solid #000000;
            background-color: #F5F5F5;
            width: 10%;
            cursor: pointer;
            font-size: 70%;
            position: absolute;
            right: 5%;
        `

        export const Tag = styled.div`
            border: 1px solid #000000;
            background-color: #F5F5F5;
            width: 20%;
            height: 10%;
            cursor: pointer;
        `

        export const TagContainer = styled.div`
            display: flex;
            flex-direction: row;
            justify-content: space-around;
            
            border: 1px solid #000000;
            background-color: #F5F5F5;
            width: 100%;
            height: 20%;
            
        `

        export const SaveButton = styled.button`
            position: fixed;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            width: 90%;
            height: 50px;
            background-color: #007AFF;
            color: white;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.2s;

            &:hover {
                background-color: #0056b3;
            }
        `
    }
        
}