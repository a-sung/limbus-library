function Status() {
  return(
      <table className="character-table">
        <caption>스테이터스</caption>
        <thead>
        <tr>
          <th>
            <div className="character-icon">
              <img src={`/images/icons/hp.webp`} alt="체력" title="체력" />
            </div>
          </th>
          <th>
            <div className="character-icon">
              <img src={`/images/icons/speed.webp`} alt="속도" title="속도" />
            </div>
          </th>
          <th>
            <div className="character-icon">
              <img src={`/images/icons/defense.webp`} alt="방어 레벨" title="방어 레벨" />
            </div>
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
      </table>
  )
}

export default Status;
