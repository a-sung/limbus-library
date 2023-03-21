import * as S from "./styles";

function SkillEffect({effect}) {
  return(
      <div>
        {effect ? <S.Container>{effect}</S.Container> : null}
      </div>
  )
}

export default SkillEffect;
