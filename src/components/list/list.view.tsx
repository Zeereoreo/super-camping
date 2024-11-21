
import { useRecoilValue } from "recoil";
import { ListProps } from "./list.prop";
import { ListStyle } from "./list.style";
import { MenuAtom } from "@/src/recoil/atom/menu.atom";
import { useMemo } from "react";

export default function ListView({ data }: ListProps) {

    
    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
            {Array.isArray(data) && data.map((list, i) => (
                    <ListStyle.List.Item key={i}>
                        <h3>{list.facltNm}</h3>
                        <p>{list.lineIntro}</p>
                        <p>{list.induty}</p>
                        
                    </ListStyle.List.Item>
                ))}
            </ListStyle.List.Container>
        </ListStyle.Container>
    );
}
