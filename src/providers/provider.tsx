'use client'
import { media } from "../providers/theme/constants/media";
import { RecoilRoot } from "recoil";
import { GlobalStyleProvider } from "../providers/global-style/global-style.provider";
import { ThemeProvider } from "../providers/theme/theme.provider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { PropsWithChildren } from "react";

const queryClient = new QueryClient();

export function Provider({children} : PropsWithChildren){
    return(
        <RecoilRoot>
            <QueryClientProvider client={queryClient}>
            <ThemeProvider>
                <GlobalStyleProvider>
                            {children}
                </GlobalStyleProvider>
            </ThemeProvider>
            </QueryClientProvider>
            </RecoilRoot>
    )
}