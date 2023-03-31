import * as S from "./styles";

function SkillEffect({name=null, effect}) {
  return(
      <div>
        {effect ? <S.Container><S.SKillNameText>{name}</S.SKillNameText>{effect}</S.Container> : null}
      </div>
  )
}

export default SkillEffect;
