import * as S from "../styles";
import Skill from "components/Skill/Skill";

function Skills({skills}) {
  return(
      <S.Table width="100%">
        <caption>스킬 정보</caption>
        <tbody>
        <tr>
          <td><Skill skill={skills[0]}/></td>
          <td><Skill skill={skills[1]}/></td>
          <td><Skill skill={skills[2]}/></td>
          <td><Skill skill={skills[3]}/></td>
        </tr>
        </tbody>
      </S.Table>
  )
}

export default Skills;
