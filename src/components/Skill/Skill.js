import * as S from "./styles";
import {useEffect, useState} from "react";
import SkillEffect from "../SkillEffect/SkillEffect";

function Skill({skill}) {
  const colorTable = {
    "-": ["#996633", "#120804"],
    "wrath": ["#913326", "#D31917"],
    "lust": ["#B44F1E", "#E5E102"],
    "sloth": ["#E49302", "#F8F203"],
    "gluttony": ["#80952D", "#EFEF03"],
    "gloom": ["#3E9CB0", "#01FEFD"],
    "pride": ["#305E84", "#11CFD9"],
    "envy": ["#6A4979", "#B903B7"],
  }

  const [isHover, setIsHover] = useState(false);
  const [isPreventHover, setIsPreventHover] = useState(false); // 모바일 mouseover 이벤트 막기
  const [hasEffect, setHasEffect] = useState(false);

  useEffect(() => {
    if (skill.desc) setHasEffect(() => true);
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

  return (
      <div>
        <S.SkillContainer
            onMouseOver={mouseOverSkillIcon}
            onMouseOut={() => setIsHover(false)}
            onTouchEnd={touchSkillIcon}
            hover={hasEffect && isHover}>
          <S.CoinPowerText color={colorTable[skill.affinity][0]}>{skill.power.coin}</S.CoinPowerText>
          <S.SkillFrame color={colorTable[skill.affinity][1]}>
            <S.SkillFrame width={"51px"} height={"48px"}>
              <S.SkillFrame width={"48px"} height={"46px"} color={colorTable[skill.affinity][0]}>
                <S.SkillFrame width={"44px"} height={"42px"}>
                  <S.SkillFrame width={"40px"} height={"38px"} color={colorTable[skill.affinity][0]}>
                    <S.SkillFrame width={"38px"} height={"36px"}>
                      <S.SkillPowerText>{skill.power.skill}</S.SkillPowerText>
                    </S.SkillFrame>
                  </S.SkillFrame>
                </S.SkillFrame>
              </S.SkillFrame>
            </S.SkillFrame>
          </S.SkillFrame>
          <S.IconsWrap>
            <S.Icon>
              <img
                  src={`${process.env.PUBLIC_URL}/images/icons/${skill.type}.webp`}
                  alt={skill.type}/>
            </S.Icon >
            {skill.affinity === '-' ? null : <S.Icon><img src={`${process.env.PUBLIC_URL}/images/icons/${skill.affinity}.webp`} alt={skill.affinity}/></S.Icon>}
          </S.IconsWrap>
          <S.NameText color={colorTable[skill.affinity][0]}>{skill.name}</S.NameText>
          <S.CoinsWrap>
            {[...Array(parseInt(skill.power.count))].map((n, idx) => (
                <S.CoinIcon key={idx}><img src={`${process.env.PUBLIC_URL}/images/icons/coin.webp`} alt="스킬 보유 코인"/></S.CoinIcon>
            ))}
          </S.CoinsWrap>
        </S.SkillContainer>
        {isHover ? <SkillEffect effect={skill.desc} /> : null}
      </div>
  );
}

export default Skill;
