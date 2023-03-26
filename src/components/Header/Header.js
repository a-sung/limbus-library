import * as S from "./styles.js";
import {useTranslation} from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = () => {
    const language = i18n.language === 'ko' ? 'jp' : 'ko';
    i18n.changeLanguage(language)
    localStorage.setItem("language", i18n.language);
  }

  return (
      <S.Container>
        <header>
          <S.Title>Limbus Company 도감</S.Title>
        </header>
        <button onClick={changeLanguage}>{i18n.language}</button>
      </S.Container>
  );
}

export default Header;
