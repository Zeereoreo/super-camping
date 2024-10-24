const BASE_MEDIA_POINTS_PX = [720, 1440];

export const media = {
    width: ({
        small,
        medium,
        large,
        common,
    }: Partial<{
        small: string;
        medium: string;
        large: string;
        common: string;
    }>) => `
    @media (min-width: 0px) and (max-width: ${BASE_MEDIA_POINTS_PX[0]}px) {
        ${small && small}
    }

    @media (min-width: ${BASE_MEDIA_POINTS_PX[0] + 1}px) and (max-width: ${
        BASE_MEDIA_POINTS_PX[1]
    }px) {
        ${medium && medium}
    }

    @media (min-width: ${BASE_MEDIA_POINTS_PX[1] + 1}px) {
        ${large && large}
    }

    ${common && common}
`,
} as const;
