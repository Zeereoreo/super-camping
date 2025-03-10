import styled from "styled-components";

export namespace DetailListStyle{
    export const Constainer = styled.div`
        width: 100%;
        height: 75vh;
    `

    export namespace Header{
        export const HeaderImg = styled.div<{$imageUrl:string}>`
            width: 100%;
            height: 50%;
            background-image: url(${(props) => props.$imageUrl});
            background-size: cover;
            background-position: center;
        `
    }
    export namespace Body{
        export const Container = styled.div`
            width: 100%;
            height: auto;
        `
        export const Title = styled.div`
            width: 100%;
            height: auto;
        `
        export const Tag = styled.div`
            width: 100%;
        `
    }
}