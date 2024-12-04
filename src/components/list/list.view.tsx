
import { useRecoilValue } from "recoil";
import { ListProps } from "./list.prop";
import { ListStyle } from "./list.style";
import { MenuAtom } from "@/src/recoil/atom/menu.atom";
import { useMemo, useState } from "react";
import { Pointer, StarIcon } from "lucide-react";

export default function ListView({ data }: ListProps) {

    const [isFavorite , setIsFavorite] = useState(false)

    const onFavoriteCheck = () =>{
        setIsFavorite(!true)
    }
    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
            {Array.isArray(data) && data.map((list, i) => (
                    <ListStyle.List.Item key={i}>
                        <h3>{list.facltNm}</h3>
                        <p>{list.lineIntro}</p>
                        <p>{list.induty}</p>
                        {isFavorite ? (
                            <StarIcon fill={'#FFD700'} stroke={'#FFD700'} onClick={onFavoriteCheck}/>
                            ) : (
                            <StarIcon fill={'transparent'}/>
                            )}
                    </ListStyle.List.Item>
                ))}
            </ListStyle.List.Container>
        </ListStyle.Container>
    );
}
