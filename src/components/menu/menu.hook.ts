import { useMenuStore } from '@/src/zustand/store/menu.store';

export function useMenuHook() {
    const setSelectedMenu = useMenuStore(state => state.setSelectedMenu);
    
    const onClickedListChange = (data: string[]) => {
        setSelectedMenu(data);
        console.log(data)
    };

    return {
        onClickedListChange
    };
}