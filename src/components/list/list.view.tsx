import { ListProps } from "./list.prop";
import { ListStyle } from "./list.style";


export default function ListView({data}:ListProps){
    console.log(data);

    return (
        <ListStyle.Container>
            <ListStyle.List.Container>
                {/* {data && data.map((list, i) => (
                    <ListStyle.List.Item key={i}>
                        {list}
                    </ListStyle.List.Item>
                ))} */}
                
            </ListStyle.List.Container>
        </ListStyle.Container>
    )
}