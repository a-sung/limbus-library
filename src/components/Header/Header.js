import * as S from "./styles.js";
import {useTranslation} from "react-i18next";

function Header() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
    localStorage.setItem("language", i18n.language);
  }
  return (
      <S.Container>
        <header>
          <S.Title>Limbus Company 도감</S.Title>
        </header>
        <S.LanguageWrap>
          <S.LanguageButton onClick={() => changeLanguage('ko')} active={i18n.language === 'ko' ? 'active' : null}>KO</S.LanguageButton>
          <span> / </span>
          <S.LanguageButton onClick={() => changeLanguage('jp')} active={i18n.language === 'jp' ? 'active' : null}>JP</S.LanguageButton>
          <span> / </span>
          <S.LanguageButton onClick={() => changeLanguage('en')} active={i18n.language === 'en' ? 'active' : null}>EN</S.LanguageButton>
        </S.LanguageWrap>

      </S.Container>
  );
}

export default Header;
