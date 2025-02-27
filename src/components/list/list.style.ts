
import { StarIcon } from "lucide-react";
import Link from "next/link";
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
            align-items: start;
            
        `

        export const Item = styled.div`
            padding: 2%;
            border: 1px solid #000000;
            height: 40vh;
            min-height: 30vh;
            width: 100%;
            display: flex;
            flex-direction: column;
            justify-content: start;
            align-items: start;
            cursor: pointer;
            
        `

        export const StyledLink = styled(Link)`
        display: block;
        text-decoration: none;
        color: inherit; 
        width: 100%;
        `;

        export const Image = styled.div<{$imageUrl:string}>`
            width: 100%;
            height: 70%;
            background-image: url(${(props) => props.$imageUrl});
            background-size: cover;
            background-position: center;
            /* border-radius: 2vh; */
        `

        export const Button = styled(StarIcon)<{ $isFavorite: boolean }>`
            fill: ${(props) => (props.$isFavorite ? "#FFD700" : "transparent")};
            stroke: ${(props) => (props.$isFavorite ? "#FFD700" : "#000")};
            cursor: pointer;

            &:hover {
            fill: ${(props) => (props.$isFavorite ? "#FFC107" : "#FFD700")};
            stroke: ${(props) => (props.$isFavorite ? "#FFC107" : "#FFD700")};
            }
        `

        export namespace Detail{
            export const Container = styled.div`

            `
            export const Title = styled.h2`
            `
            export const Type = styled.p`
            `
            export const Expain = styled.p`
            `
        }
    }

    export namespace Detail{
        export const Container = styled.div`
            
        `
    }
}