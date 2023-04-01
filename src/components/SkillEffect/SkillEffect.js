import * as S from "./styles";
import {useEffect, useState} from "react";

function SkillEffect({name=null, effect}) {
  const circleNumber = [null, '①','②','③','④','⑤'];
  const [effectDom, setEffectDom] = useState();

  useEffect(() => {
    if (!effect) return;
    const e = effect.split('$');
    setEffectDom(() => e);
  }, [])

  return(
      <div>
        {effect ?
          <S.Container>
            {name ? <S.SKillNameText>{name}</S.SKillNameText> : null}
            {effectDom ?
              effectDom.map((text, idx) => {
                if (text)
                  return (
                    <S.SkillText key={idx}>
                      <div>{circleNumber[idx]}</div>
                      <div>{text}</div>
                    </S.SkillText>
                  )
              })
              :null}
          </S.Container>
          : null}
      </div>
  )
}

export default SkillEffect;
