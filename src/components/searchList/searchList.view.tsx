import { SearchListStyle } from "./searchList.style";
import { useSearchListHook } from "./searchList.hook";

export default function SearchListView() {
    const { dateRange, isModalOpen, toggleModal, homeViewRef, homeWidth } = useSearchListHook();

    return (
        <SearchListStyle.Container ref={homeViewRef}>
            <SearchListStyle.List.Container>
                <SearchListStyle.List.Porm onClick={toggleModal}>
                    <SearchListStyle.List.Icon>검색아이콘</SearchListStyle.List.Icon>
                    <SearchListStyle.List.Date>{dateRange}</SearchListStyle.List.Date>
                </SearchListStyle.List.Porm>
            </SearchListStyle.List.Container>


            <SearchListStyle.List.ModalContainer $isOpen={isModalOpen} width={homeWidth}>
                <SearchListStyle.List.ModalContent>
                    <h2>모달 제목</h2>
                    <p>모달 내용</p>
                    <button onClick={toggleModal}>닫기</button>
                </SearchListStyle.List.ModalContent>
            </SearchListStyle.List.ModalContainer>
        </SearchListStyle.Container>
    )
}
