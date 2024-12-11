import { PropsWithChildren } from "react";

export default function HomeLayOut({children} : PropsWithChildren){
    return <main className={'container prose py-10'}>hi{children}</main>
}