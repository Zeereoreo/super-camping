'use client'

import styled from "styled-components";
import HomeView from '../containers/home/home.view'
import SidePageView from '../containers/sidepage/sidepage.view'
import { media } from "../providers/theme/constants/media";
import { Provider } from "../providers/provider";
import { RecoilRoot } from "recoil";

export const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    background-color: #DCE8D0;
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
    <Provider>
      <RecoilRoot>
        <PageContainer>
          <SidePageView />
          <HomeView />
        </PageContainer>
      </RecoilRoot>
    </Provider>
  )
}
