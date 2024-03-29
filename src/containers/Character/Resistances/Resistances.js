import * as S from "../styles";
import {useTranslation} from "react-i18next";

function Resistances({resistances}) {
  const { t } = useTranslation();
  return(
      <S.Table width="49%">
        <caption>{t(`captions.resistances`)}</caption>
        <thead>
        <tr>
          <th>
            <S.Icon>
              <img src={`${process.env.PUBLIC_URL}/images/icons/slash.webp`} alt="참격" title="참격" />
            </S.Icon>
          </th>
          <th>
            <S.Icon>
              <img src={`${process.env.PUBLIC_URL}/images/icons/pierce.webp`} alt="관통" title="관통" />
            </S.Icon>
          </th>
          <th>
            <S.Icon>
              <img src={`${process.env.PUBLIC_URL}/images/icons/blunt.webp`} alt="타격" title="타격" />
            </S.Icon>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{(t(`resistances.${resistances.slash}`))}</td>
          <td>{(t(`resistances.${resistances.pierce}`))}</td>
          <td>{(t(`resistances.${resistances.blunt}`))}</td>
        </tr>
        </tbody>
      </S.Table>
  )
}

export default Resistances;
