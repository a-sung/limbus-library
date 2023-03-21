import * as S from "../styles";

function Status() {
  return(
      <S.Table width="38%">
        <caption>스테이터스</caption>
        <thead>
          <tr>
            <th>
              <S.Icon><img src={`/images/icons/hp.webp`} alt="체력" title="체력" /></S.Icon>
            </th>
            <th>
              <S.Icon><img src={`/images/icons/speed.webp`} alt="속도" title="속도" /></S.Icon>
            </th>
            <th>
              <S.Icon><img src={`/images/icons/defense.webp`} alt="방어 레벨" title="방어 레벨" /></S.Icon>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>132</td>
            <td>139</td>
            <td>32</td>
          </tr>
        </tbody>
      </S.Table>
  )
}

export default Status;
