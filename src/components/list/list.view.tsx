// ListView.tsx
import { ListProps } from "./list.prop";
import { ListStyle } from "./list.style";

export default function ListView({ data }: ListProps) {

    console.log(typeof data)
    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
            {Array.isArray(data) && data.map((list, i) => (
                    <ListStyle.List.Item key={i}>
                        <h3>{list.facltNm}</h3>
                        <p>{list.lineIntro}</p>
                    </ListStyle.List.Item>
                ))}
            </ListStyle.List.Container>
        </ListStyle.Container>
    );
}
