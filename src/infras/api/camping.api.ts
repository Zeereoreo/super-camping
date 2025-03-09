import axios from 'axios';
import { Tag } from '@/src/constants/tags';
import { campingClient } from '.';
import { CampingItem } from '@/src/type/camping.item';

interface SearchParams {
    searchName?: string;
    date?: string;
    people?: {
        adult: number;
        child: number;
    };
    selectedTags: {
        accommodation: string[];
        facility: string[];
        activity: string[];
    };
}

export const searchCampingSites = async (params: SearchParams) => {
    const { searchName, selectedTags } = params;
    
    // 선택된 숙소 유형 태그들의 이름을 가져와서 키워드로 사용
    const accommodationKeywords = selectedTags.accommodation.map(tag => {
        switch(tag) {
            case 'normal_camping': return '일반야영장';
            case 'auto_camping': return '자동차야영장';
            case 'glamping': return '글램핑';
            case 'caravan': return '카라반';
            case 'pension': return '펜션';
            default: return '';
        }
    });

    // 검색어와 숙소 유형을 결합
    const keywords = [
        searchName,
        ...accommodationKeywords
    ].filter(Boolean);

    const encodedKeyword = encodeURIComponent(keywords.join(','));
    console.log('검색 키워드:', keywords);
    console.log('인코딩된 키워드:', encodedKeyword);
    
    try {
        const url = `/searchList?serviceKey=${process.env.NEXT_PUBLIC_SECRET_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&_type=json&keyword=${encodedKeyword}`;
        console.log('API 요청 URL:', url);

        const response = await campingClient.get(url);
        console.log('API 응답 데이터:', response.data);

        if (!response.data?.response?.body?.items?.item) {
            console.log('검색 결과 없음');
            return [];
        }

        const items = Array.isArray(response.data.response.body.items.item) 
            ? response.data.response.body.items.item 
            : [response.data.response.body.items.item];
        
        console.log('검색된 아이템 수:', items.length);

        // 시설과 활동 태그로 추가 필터링
        const filteredItems = items.filter((item: CampingItem) => {
            if (!item) return false;

            const hasSelectedFacilities = selectedTags.facility.length === 0 || 
                selectedTags.facility.some(tag => item.sbrsCl?.includes(tag));
                
            const hasSelectedActivities = selectedTags.activity.length === 0 || 
                selectedTags.activity.some(tag => item.posblFcltyCl?.includes(tag));

            return hasSelectedFacilities && hasSelectedActivities;
        });

        console.log('필터링 후 아이템 수:', filteredItems.length);
        return filteredItems;
    } catch (error) {
        console.error('캠핑장 검색 API 호출 실패:', error);
        if (axios.isAxiosError(error)) {
            console.error('API 에러 상세:', error.response?.data);
        }
        return [];
    }
}; 