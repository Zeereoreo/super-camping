// pages/detail/[id].tsx

import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function DetailPage() {
    const router = useRouter();
    const { id } = router.query; // URL에서 id 값 가져오기
    const [item, setItem] = useState(null);

    useEffect(() => {
        // 실제로는 API 요청 등을 통해 상세 정보를 가져옵니다.
        if (id) {
            // 예시로 임시 데이터를 사용
            const fetchItemDetails = () => {
                // 아이템 ID에 맞는 데이터를 가져오는 로직 (예: API 호출)
                setItem({
                    id,
                    name: `Item ${id}`,
                    description: `Description for item ${id}`,
                });
            };

            fetchItemDetails();
        }
    }, [id]);

    if (!item) return <div>Loading...</div>;

    return (
        <div>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
        </div>
    );
}
