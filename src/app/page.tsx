'use client'

import styled from "styled-components";
import HomeView from '../containers/home/home.view'
import SidePageView from '../containers/sidepage/sidepage.view'
import { media } from "../providers/theme/constants/media";

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
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
      <SidePageView>
      </SidePageView>
      <HomeView>
      </HomeView>
    </PageContainer>
  )
}
