import * as S from "./styles";

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
  return (
      <S.SkillContainer>
        <S.CoinPowerText color={colorTable[skill.affinity][0]}>{skill.power.split('/')[1]}</S.CoinPowerText>
        <S.SkillIcon color={colorTable[skill.affinity][1]}>
          <S.SkillIcon width={"51px"} height={"48px"}>
            <S.SkillIcon width={"48px"} height={"46px"} color={colorTable[skill.affinity][0]}>
              <S.SkillIcon width={"44px"} height={"42px"}>
               <S.SkillIcon width={"40px"} height={"38px"} color={colorTable[skill.affinity][0]}>
                 <S.SkillIcon width={"38px"} height={"36px"}>
                    <S.SkillPowerText>{skill.power.split('/')[0]}</S.SkillPowerText>
                  </S.SkillIcon>
                </S.SkillIcon>
              </S.SkillIcon>
            </S.SkillIcon>
          </S.SkillIcon>
        </S.SkillIcon>
        <S.IconsWrap>
          <S.Icon><img src={`/images/icons/${skill.type}.webp`} /></S.Icon >
          {skill.affinity === '-' ? null : <S.Icon><img src={`/images/icons/${skill.affinity}.webp`} /></S.Icon>}
        </S.IconsWrap>
        <S.SkillNameText color={colorTable[skill.affinity][0]}>{skill.name}</S.SkillNameText>

      </S.SkillContainer>

  );
}

export default Skill;
