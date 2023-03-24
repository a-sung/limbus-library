import * as S from "../styles";

function Status({status}) {
  return(
      <S.Table width="49%">
        <caption>스테이터스</caption>
        <thead>
          <tr>
            <th>
              <S.Icon><img src={`${process.env.PUBLIC_URL}/images/icons/hp.webp`} alt="체력" title="체력" /></S.Icon>
            </th>
            <th>
              <S.Icon><img src={`${process.env.PUBLIC_URL}/images/icons/speed.webp`} alt="속도" title="속도" /></S.Icon>
            </th>
            <th>
              <S.Icon><img src={`${process.env.PUBLIC_URL}/images/icons/defense.webp`} alt="방어 레벨" title="방어 레벨" /></S.Icon>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{status.health}</td>
            <td>{status.speed}</td>
            <td>{status.defense}</td>
          </tr>
        </tbody>
      </S.Table>
  )
}

export default Status;
