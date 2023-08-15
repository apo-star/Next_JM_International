/** @format */
import ES from "../translations/es.json";
import EN from "../translations/en.json";

export const getTranslation = (language: string) => {
  return language === "es" ? ES : EN;
};
