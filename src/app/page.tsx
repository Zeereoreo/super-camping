'use client'

import styled from "styled-components";
import HomeView from '../containers/home/home.view'
import SidePageView from '../containers/sidepage/sidepage.view'
import { media } from "../providers/theme/constants/media";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #DCE8D0;
    min-height: 100vh;
    ${media.width({
  small: `
          flex-direction: column;
        `,
  medium: `
          flex-direction: row;
        `,
  large: `
          flex-direction: row;
        `,
})}
`

export default function Main() {
  return (
    <PageContainer>
      <SidePageView />
      <HomeView />
    </PageContainer>
  )
}
