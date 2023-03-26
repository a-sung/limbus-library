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
        <div>
          <button onClick={() => changeLanguage('ko')}>KO/</button>
          <button onClick={() => changeLanguage('jp')}>JP/</button>
          <button onClick={() => changeLanguage('en')}>EN</button>
        </div>

      </S.Container>
  );
}

export default Header;
