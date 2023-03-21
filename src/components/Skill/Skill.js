import * as S from "./styles";
import {useEffect, useState} from "react";
import SkillEffect from "../SkillEffect/SkillEffect";

function Skill({skill}) {
  const colorTable = {
    "분노": ["#913326", "#D31917"],
    "색욕": ["#B44F1E", "#E5E102"],
    "나태": ["#E49302", "#F8F203"],
    "탐식": ["#80952D", "#EFEF03"],
    "우울": ["#3E9CB0", "#01FEFD"],
    "오만": ["#305E84", "#11CFD9"],
    "질투": ["#6A4979", "#B903B7"],
    "-": ["#996633", "#120804"],
  }

  const [isHover, setIsHover] = useState(false);
  const [hasEffect, setHasEffect] = useState(false);

  useEffect(() => {
    if (skill.desc) setHasEffect(() => true);
  }, [])

  return (
      <S.SkillContainer onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)} hover={hasEffect}>
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
          <S.Icon><img src={`/images/icons/${skill.type}.webp`} alt={skill.type}/></S.Icon >
          {skill.affinity === '-' ? null : <S.Icon><img src={`/images/icons/${skill.affinity}.webp`} alt={skill.affinity}/></S.Icon>}
        </S.IconsWrap>
        <S.NameText color={colorTable[skill.affinity][0]}>{skill.name}</S.NameText>
        <S.CoinsWrap>
          {[...Array(parseInt(skill.power.count))].map((n, idx) => (
              <S.CoinIcon key={idx}><img src={`/images/icons/coin.webp`} alt="스킬 보유 코인"/></S.CoinIcon>
          ))}
        </S.CoinsWrap>
        {isHover? <SkillEffect effect={skill.desc} /> : null}
      </S.SkillContainer>

  );
}

export default Skill;
