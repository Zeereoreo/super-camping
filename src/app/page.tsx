'use client'

import HomeView from '../containers/home/home.view'
import SidePageView from '../containers/sidepage/sidepage.view'
import { PageContainer } from './page.style'

export default function HomePage() {
  return (
    <PageContainer>
      <SidePageView />
      <HomeView />
    </PageContainer>
  )
}
