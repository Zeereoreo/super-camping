'use client'
import { ListAtom } from "@/src/recoil/atom/list.atom"
import { Suspense, use, useEffect } from "react"
import { useRecoilValue } from "recoil"

export default function ListDetailPage({ params }: { params: { id: string } }){
    const list = useRecoilValue(ListAtom); 
    // useEffect(() => {
    //     console.log(list); // 상태가 잘 업데이트 되었는지 확인
    //     console.log(params)
    // }, []);
    console.log(list)
    // const listItem = list.find(item => item.contentId === params.id); 

    
    // if (!listItem) {
    //     return <div>⚠️ 해당 ID의 데이터를 찾을 수 없습니다.</div>;
    // }

    return (
        <Suspense>
        <main>
            {list}
        </main>
        </Suspense>
        
    );
}