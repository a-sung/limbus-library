import * as S from "./styles";

function Skill() {
  return (
      <S.SkillContainer>
          <S.CoinPowerText>+6</S.CoinPowerText>
          <S.SkillIcon>
            <S.SkillIcon width={"49px"} height={"47px"} color={"black"}>
              <S.SkillIcon width={"44px"} height={"42px"} color={"gray"}>
                <S.SkillIcon width={"40px"} height={"38px"} color={"black"}>
                 <S.SkillIcon width={"34px"} height={"32px"}>
                   <S.SkillPowerText>7</S.SkillPowerText>
                  </S.SkillIcon>
                </S.SkillIcon>
              </S.SkillIcon>
            </S.SkillIcon>
          </S.SkillIcon>
          <S.IconsWrap>
            <S.Icon><img src={`/images/icons/참격.webp`} /></S.Icon >
            <S.Icon><img src={`/images/icons/우울.webp`} /></S.Icon>
          </S.IconsWrap>
      </S.SkillContainer>

  );
}

export default Skill;
