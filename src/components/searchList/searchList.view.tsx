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


            <SearchListStyle.Modal.Container $isOpen={isModalOpen} width={homeWidth}>
                <SearchListStyle.Modal.Content>
                    <SearchListStyle.Modal.Title>
                        <SearchListStyle.Modal.CloseButton onClick={toggleModal}>닫기</SearchListStyle.Modal.CloseButton>검색</SearchListStyle.Modal.Title>
                    <SearchListStyle.Modal.SearchName />
                    <SearchListStyle.Modal.Date />
                    <SearchListStyle.Modal.People />
                    <SearchListStyle.Modal.TagContainer>
                        <SearchListStyle.Modal.Tag>태그1</SearchListStyle.Modal.Tag>
                        <SearchListStyle.Modal.Tag>태그2</SearchListStyle.Modal.Tag>
                        <SearchListStyle.Modal.Tag>태그3</SearchListStyle.Modal.Tag>
                    </SearchListStyle.Modal.TagContainer>

                </SearchListStyle.Modal.Content>
            </SearchListStyle.Modal.Container>
        </SearchListStyle.Container>
    )
}
