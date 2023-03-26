import * as S from "../styles";
import Skill from "components/Skill/Skill";
import {useTranslation} from "react-i18next";

function Skills({skills}) {
  const { t } = useTranslation();
  return(
      <S.Table width="100%">
        <caption>{t(`captions.skills`)}</caption>
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
