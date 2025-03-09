export interface Tag {
    id: string;
    name: string;
    category: 'accommodation' | 'facility' | 'activity';
}

export const ACCOMMODATION_TAGS: Tag[] = [
    { id: 'normal_camping', name: '일반야영장', category: 'accommodation' },
    { id: 'auto_camping', name: '자동차야영장', category: 'accommodation' },
    { id: 'glamping', name: '글램핑', category: 'accommodation' },
    { id: 'caravan', name: '카라반', category: 'accommodation' },
    { id: 'pension', name: '펜션', category: 'accommodation' },
];

export const FACILITY_TAGS: Tag[] = [
    { id: 'toilet', name: '화장실', category: 'facility' },
    { id: 'shower', name: '샤워실', category: 'facility' },
    { id: 'water', name: '수도시설', category: 'facility' },
    { id: 'market', name: '매점', category: 'facility' },
    { id: 'parking', name: '주차장', category: 'facility' },
];

export const ACTIVITY_TAGS: Tag[] = [
    { id: 'fishing', name: '낚시', category: 'activity' },
    { id: 'swimming', name: '수영장', category: 'activity' },
    { id: 'hiking', name: '등산', category: 'activity' },
    { id: 'bbq', name: '바베큐', category: 'activity' },
];

export const ALL_TAGS: Tag[] = [
    ...ACCOMMODATION_TAGS,
    ...FACILITY_TAGS,
    ...ACTIVITY_TAGS,
]; 