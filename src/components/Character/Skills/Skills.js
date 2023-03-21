import * as S from "../styles";
import Skill from "components/Skill/Skill";

function Skills() {
  return(
      <S.Table>
        <caption>스킬 정보</caption>
        <thead>
          <tr>
            <th>스킬1</th>
            <th>스킬2</th>
            <th>스킬3</th>
            <th>수비</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><Skill /></td>
            <td><Skill /></td>
            <td><Skill /></td>
            <td><Skill /></td>
          </tr>
        </tbody>
      </S.Table>
  )
}

export default Skills;
