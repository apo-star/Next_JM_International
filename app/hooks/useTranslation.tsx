/** @format */

import { useEffect, useState } from "react";
import { getTranslation } from "../utils/utils";

import { useSelector } from "react-redux";

interface TranslationData {
  [key: string]: string;
}

const getJson = ({ language }: { language: string }) => {
  const jsonData = getTranslation(language ?? "en");
  if (jsonData && Object.keys(jsonData).length > 0) return jsonData;
  return null;
};

export const useTranslation = () => {
  const [translation, setTranslation] = useState<TranslationData | null>({});
  const { language } = useSelector((state: any) => state.mount);

  useEffect(() => {
    const info = getJson({ language });
    setTranslation(info);
  }, [language]);

  const translate = (key: string) => {
    if (translation) return translation[key];
  };

  return {
    t: translate
  };
};
