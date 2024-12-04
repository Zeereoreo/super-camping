'use client'

import styled from "styled-components";
import HomeView from '../containers/home/home.view'
import SidePageView from '../containers/sidepage/sidepage.view'
import { media } from "../providers/theme/constants/media";
import { RecoilRoot } from "recoil";
import { GlobalStyleProvider } from "../providers/global-style/global-style.provider";
import { ThemeProvider } from "../providers/theme/theme.provider";

const PageContainer = styled.div`
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
    <RecoilRoot>
      <ThemeProvider>
        <GlobalStyleProvider>
          <PageContainer>
                    <SidePageView>
                    </SidePageView>
                    <HomeView>
                    </HomeView>
          </PageContainer>
        </GlobalStyleProvider>
      </ThemeProvider>
    </RecoilRoot>
  )
}
