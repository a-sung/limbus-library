import * as S from "../styles"
import {useState} from "react";
import SkillEffect from "components/SkillEffect/SkillEffect";

function Passive({caption, passive}) {
  const [isHover, setIsHover] = useState(false);

  return(
      <S.Table>
        <caption>{caption}</caption>
        <tbody>
        <tr>
          <td>
            <S.PassivesWrap onMouseOver={() => setIsHover(true)} onMouseOut={() => setIsHover(false)}>
              <S.Icon><img src={`${process.env.PUBLIC_URL}/images/icons/${passive.affinity}.webp`} /></S.Icon>
              <S.PassiveText>x{passive.count}</S.PassiveText>
              <S.PassiveText>{passive.name}</S.PassiveText>
            </S.PassivesWrap>
          </td>
        </tr>
        <tr>
          <td>
            {isHover? <SkillEffect effect={passive.desc} support/> : null}
          </td>
        </tr>
        </tbody>
      </S.Table>
  )
}

export default Passive;
