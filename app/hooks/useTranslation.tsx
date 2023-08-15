/** @format */

import { useEffect, useState } from "react";
import { getTranslation } from "../utils/utils";
import { useRecoilValue } from "recoil";
import { charLngState } from "../atoms/language.atom";

interface TranslationData {
  [key: string]: string;
}

export const useTranslation = () => {
  const [translation, setTranslation] = useState<TranslationData>({});
  const language = useRecoilValue(charLngState);

  useEffect(() => {
    const jsonData = getTranslation(language ?? "en");
    if (jsonData && Object.keys(jsonData).length > 0) setTranslation(jsonData);
  }, [language]);

  const translate = (key: string) => {
    return translation[key];
  };

  return {
    t: translate
  };
};
