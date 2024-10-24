'use client'


import "styled-components";
import { colors } from "./constants/colors";
import { config } from "./constants/config";
import { fonts } from "./constants/fonts";
import { media } from "./constants/media";

declare module "styled-components" {
    export interface DefaultTheme {
        config: typeof config;
        colors: typeof colors;
        fonts: typeof fonts;
        media: typeof media;
    }
}
