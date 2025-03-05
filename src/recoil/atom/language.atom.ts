import { atom } from "recoil";
import { v4 } from "uuid";

export type Language = "ko" | "en" | "ja";

export const LanguageAtom = atom<Language>({
    key: `language${v4()}`,
    default: "ko"
}); 