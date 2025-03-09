import { SearchListStyle } from "./searchList.style";
import { useSearchListHook } from "./searchList.hook";
import useSearch from "@/src/zustand/store/search.store";
import { ChangeEvent, useState } from "react";
import { ACCOMMODATION_TAGS, FACILITY_TAGS, ACTIVITY_TAGS, Tag } from "@/src/constants/tags";
import { searchCampingSites } from "@/src/infras/api/camping.api";
import { useSetRecoilState } from "recoil";
import { ListAtom } from "@/src/recoil/atom/list.atom";
import { useRouter } from "next/navigation";

export default function SearchListView() {
    const router = useRouter();
    const { isModalOpen, toggleModal, homeViewRef, homeWidth, list } = useSearchListHook();
    const { date, searchName, people, selectedTags, setDate, setSearchName, setPeople, toggleTag } = useSearch();
    const [isLoading, setIsLoading] = useState(false);
    const setList = useSetRecoilState(ListAtom);

    const handleSearchNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearchName(e.target.value);
    };

    const handleDateChange = (e: ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };

    const handlePeopleChange = (type: 'adult' | 'child', value: number) => {
        if (value < 0) return;
        setPeople({
            ...people,
            [type]: value
        });
    };

    const isTagSelected = (tag: Tag) => {
        return selectedTags[tag.category].includes(tag.id);
    };

    const handleSave = async () => {
        if (!date) {
            alert('날짜를 선택해주세요.');
            return;
        }

        try {
            setIsLoading(true);
            console.log('검색 시작 - 검색 조건:', { searchName, date, people, selectedTags });

            const results = await searchCampingSites({
                searchName,
                date,
                people,
                selectedTags
            });

            console.log('검색 결과:', results);
            setList(results);

            // 검색 결과가 제대로 저장되었는지 확인
            setTimeout(() => {
                console.log('Recoil에 저장된 검색 결과:', list);
            }, 0);

            toggleModal();
            router.push('/search');
        } catch (error) {
            console.error('검색 중 오류 발생:', error);
            alert('검색 중 오류가 발생했습니다. 다시 시도해주세요.');
        } finally {
            setIsLoading(false);
        }
    };

    const renderTagSection = (title: string, tags: Tag[]) => (
        <div style={{ marginBottom: '20px' }}>
            <h3 style={{ marginBottom: '10px' }}>{title}</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {tags.map(tag => (
                    <SearchListStyle.Modal.Tag
                        key={tag.id}
                        onClick={() => toggleTag(tag)}
                        style={{
                            backgroundColor: isTagSelected(tag) ? "#007AFF" : "#F5F5F5",
                            color: isTagSelected(tag) ? "white" : "black",
                            padding: '8px 16px',
                            borderRadius: '20px',
                            border: 'none'
                        }}
                    >
                        {tag.name}
                    </SearchListStyle.Modal.Tag>
                ))}
            </div>
        </div>
    );

    return (
        <SearchListStyle.Container ref={homeViewRef}>
            <SearchListStyle.List.Container>
                <SearchListStyle.List.Porm onClick={toggleModal}>
                    <SearchListStyle.List.Icon>검색아이콘</SearchListStyle.List.Icon>
                    <SearchListStyle.List.Date>
                        {date || "날짜를 선택하세요"}
                        {people.adult > 0 && ` · 성인 ${people.adult}명`}
                        {people.child > 0 && ` · 아동 ${people.child}명`}
                    </SearchListStyle.List.Date>
                </SearchListStyle.List.Porm>
            </SearchListStyle.List.Container>

            <SearchListStyle.Modal.Container $isOpen={isModalOpen} width={homeWidth}>
                <SearchListStyle.Modal.Content>
                    <SearchListStyle.Modal.Title>
                        <SearchListStyle.Modal.CloseButton onClick={toggleModal}>닫기</SearchListStyle.Modal.CloseButton>
                        검색
                    </SearchListStyle.Modal.Title>
                    <SearchListStyle.Modal.SearchName
                        value={searchName}
                        onChange={handleSearchNameChange}
                        placeholder="검색어를 입력하세요"
                    />
                    <SearchListStyle.Modal.Date>
                        <input
                            type="date"
                            value={date}
                            onChange={handleDateChange}
                        />
                    </SearchListStyle.Modal.Date>
                    <SearchListStyle.Modal.People>
                        <div>
                            <span>성인</span>
                            <button onClick={() => handlePeopleChange('adult', people.adult - 1)}>-</button>
                            <span>{people.adult}</span>
                            <button onClick={() => handlePeopleChange('adult', people.adult + 1)}>+</button>
                        </div>
                        <div>
                            <span>아동</span>
                            <button onClick={() => handlePeopleChange('child', people.child - 1)}>-</button>
                            <span>{people.child}</span>
                            <button onClick={() => handlePeopleChange('child', people.child + 1)}>+</button>
                        </div>
                    </SearchListStyle.Modal.People>
                    <SearchListStyle.Modal.TagContainer>
                        {renderTagSection('숙소 유형', ACCOMMODATION_TAGS)}
                        {renderTagSection('시설', FACILITY_TAGS)}
                        {renderTagSection('활동', ACTIVITY_TAGS)}
                    </SearchListStyle.Modal.TagContainer>
                    <SearchListStyle.Modal.SaveButton
                        onClick={handleSave}
                        disabled={isLoading}
                        style={{ opacity: isLoading ? 0.7 : 1 }}
                    >
                        {isLoading ? '검색 중...' : '검색하기'}
                    </SearchListStyle.Modal.SaveButton>
                </SearchListStyle.Modal.Content>
            </SearchListStyle.Modal.Container>
        </SearchListStyle.Container>
    );
}
