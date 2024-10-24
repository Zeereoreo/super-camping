'use client'

import { useState } from "react";
import { colors } from "./constants/colors";
import { config } from "./constants/config";
import { fonts } from "./constants/fonts";
import { media } from "./constants/media";

export function useTheme() {
    const [theme, setTheme] = useState({
        config,
        colors,
        fonts,
        media,
    });

    return {
        theme,
    };
}
