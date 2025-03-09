'use client'

import { Inter } from 'next/font/google'
import { ThemeProvider } from "../providers/theme/theme.provider";
import { GlobalStyleProvider } from '../providers/global-style/global-style.provider';
import { RecoilRoot } from 'recoil';
import { Provider } from '../providers/provider';
import { Metadata } from 'next';
import StyledComponentsRegistry from '../providers/registry';

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <StyledComponentsRegistry>
          <Provider>
            <RecoilRoot>
              <main className={'container'}>{children}</main>
            </RecoilRoot>
          </Provider>
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
