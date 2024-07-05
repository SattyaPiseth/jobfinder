
import { useTranslation } from "react-i18next";

const useFontClass = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language;
  
  // Define font classes based on the current language
  const fontClass = currentLang === "kh" ? "font-suwannaphum" : "font-kantumruy";
  
  return { currentLang, fontClass };
}

export default useFontClass;
