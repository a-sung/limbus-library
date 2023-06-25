import * as S from "./styles"
import {useState, useEffect} from "react";
import SkillEffect from "containers/SkillEffect/SkillEffect";
import {useTranslation} from "react-i18next";

function Passive({caption, passive}) {
  const { t, i18n } = useTranslation();

  const [isHover, setIsHover] = useState(false);
  const [isPreventHover, setIsPreventHover] = useState(false); // 모바일 mouseover 이벤트 막기

  const [hasEffect, setHasEffect] = useState(false);

  useEffect(() => {
    if (passive.desc[i18n.language]) setHasEffect(() => true);
  }, [])

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
            <div
                onMouseOver={mouseOverSkillIcon}
                onMouseOut={() => setIsHover(false)}
                onTouchEnd={touchSkillIcon}
                hover={hasEffect && isHover}>
              <img src={`${process.env.PUBLIC_URL}/images/icons/${passive.affinity}.webp`} />
              <p>x{passive.ac} {t(`passive.${passive.type}`)} / {passive.name[i18n.language]}</p>
            </div>
            {isHover? <SkillEffect effect={passive.desc[i18n.language]} support/> : null}
          </td>
        </tr>
        </tbody>
      </S.Table>
  )
}

export default Passive;
