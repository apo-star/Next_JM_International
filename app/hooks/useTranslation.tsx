/** @format */

import { useEffect, useState } from "react";
import { getTranslation } from "../utils/utils";

import { useSelector } from "react-redux";

interface TranslationData {
  [key: string]: string;
}

/**
 * @typedef {Object.<string, string>} TranslationData - Object containing translation data where keys are strings and values are strings.
 */

/**
 * Retrieves JSON translation data for a given language.
 *
 * @param {Object} params - Parameters object.
 * @param {string} params.language - The language code for which to retrieve the translation data.
 * @returns {TranslationData | null} Translation data for the specified language
 * or null if no data is available.
 */

const getJson = ({ language }: { language: string }) => {
  const jsonData = getTranslation(language ?? "en");
  if (jsonData && Object.keys(jsonData).length > 0) return jsonData;
  return null;
};

/**
 * Custom hook for handling translation functionality.
 *
 * @returns {{ t: (key: string) => string }} An object with a translate function `t`
 * that takes a key and returns the corresponding translation.
 */

export const useTranslation = (): { t: (key: string) => string } => {
  /**
   * @type {[TranslationData | null, function]} State tuple containing translation data and a function to update it.
   */
  const [translation, setTranslation] = useState<TranslationData | null>({});
  /**
   * Redux selector to get the current language from the store.
   * @type {any} - Redux state object.
   */
  const { language } = useSelector((state: any) => state.mount);

  /**
   * Fetches translation data when the language changes and updates the state.
   *
   * @param {string} language - The language code for which to fetch the translation data.
   * @returns {void}
   */
  useEffect(() => {
    const info = getJson({ language });
    setTranslation(info);
  }, [language]);

  /**
   * Translates a given key to its corresponding value in the current language.
   *
   * @param {string} key - The key to translate.
   * @returns {string} The translated value for the given key, or an empty
   * string if no translation is available.
   */

  const translate = (key: string): string => {
    if (translation && translation[key]) {
      return translation[key];
    } else {
      return "";
    }
  };

  return {
    t: translate
  };
};
