
import { Inter } from 'next/font/google'
import { ThemeProvider } from "../providers/theme/theme.provider";
import { GlobalStyleProvider } from '../providers/global-style/global-style.provider';
import { RecoilRoot } from 'recoil';

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        {/* <RecoilRoot>
          <ThemeProvider>
            <GlobalStyleProvider> */}
              {children}
            {/* </GlobalStyleProvider>
          </ThemeProvider>
        </RecoilRoot> */}
        </body>
    </html>
  )
}
