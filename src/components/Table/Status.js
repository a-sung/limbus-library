import * as S from "./styles";
import {useTranslation} from "react-i18next";

function Status({status}) {
  const { t } = useTranslation();
  return(
      <S.Table width="100%">
        <caption>{t(`captions.status`)}</caption>
        <thead>
          <tr>
            <th>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/icons/hp.webp`} alt="체력" title="체력" width="22px"/>
              </div>
            </th>
            <th>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/icons/speed.webp`} alt="속도" title="속도" width="22px"/>
              </div>
            </th>
            <th>
              <div>
                <img src={`${process.env.PUBLIC_URL}/images/icons/defense.webp`} alt="방어 레벨" title="방어 레벨" width="22px"/>
              </div>
            </th>
          </tr>
        </thead>
        <tbody>
        <tr>
          <td>{status?.hp}</td>
          <td>{status?.speed}</td>
          <td>{status?.defense}</td>
        </tr>
        </tbody>
      </S.Table>
  )
}

export default Status;
