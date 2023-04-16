import * as S from "../styles"
import {useState} from "react";
import SkillEffect from "components/SkillEffect/SkillEffect";
import {useTranslation} from "react-i18next";

function Passive({caption, passive}) {
  const { t, i18n } = useTranslation();

  const [isHover, setIsHover] = useState(false);
  const [isPreventHover, setIsPreventHover] = useState(false); // 모바일 mouseover 이벤트 막기

  const mouseOverSkillIcon = () => {
    if (!isPreventHover) {
      setIsHover(true);
    }
  }

  const touchSkillIcon = () => {
    setIsHover(!isHover);
    isHover? setIsPreventHover(true) : setIsPreventHover(false);
  }

  return(
      <S.Table>
        <caption>{caption}</caption>
        <tbody>
        <tr>
          <td>
            <S.PassivesWrap
                onMouseOver={mouseOverSkillIcon}
                onMouseOut={() => setIsHover(false)}
                onTouchEnd={touchSkillIcon}>
              <S.Icon><img src={`${process.env.PUBLIC_URL}/images/icons/${passive.affinity}.webp`} /></S.Icon>
              <S.PassiveText>x{passive.ac}</S.PassiveText>
              <S.PassiveText>{t(`passive.${passive.type}`)}</S.PassiveText>
              <S.PassiveText>/</S.PassiveText>
              <S.PassiveText>{passive.name[i18n.language]}</S.PassiveText>
            </S.PassivesWrap>
          </td>
        </tr>
        <tr>
          <td>
            {isHover? <SkillEffect effect={passive.desc[i18n.language]} support/> : null}
          </td>
        </tr>
        </tbody>
      </S.Table>
  )
}

export default Passive;
