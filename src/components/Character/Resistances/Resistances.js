import * as S from "../styles";

function Resistances({resistances}) {
  return(
      <S.Table width="53%">
        <caption>내성 정보</caption>
        <thead>
        <tr>
          <th>
            <S.Icon><img src={`/images/icons/참격.webp`} alt="참격" title="참격" /></S.Icon>
          </th>
          <th>
            <S.Icon><img src={`/images/icons/관통.webp`} alt="관통" title="관통" /></S.Icon>
          </th>
          <th>
            <S.Icon><img src={`/images/icons/타격.webp`} alt="타격" title="타격" /></S.Icon>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>{resistances.slash}</td>
          <td>{resistances.pierce}</td>
          <td>{resistances.blunt}</td>
        </tr>
        </tbody>
      </S.Table>
  )
}

export default Resistances;
