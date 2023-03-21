function Resistances() {
  return(
      <table className="character-table">
        <caption>내성 정보</caption>
        <thead>
        <tr>
          <th>
            <div className="character-icon">
              <img src={`/images/icons/참격.webp`} alt="참격" title="참격" />
            </div>
          </th>
          <th>
            <div className="character-icon">
              <img src={`/images/icons/관통.webp`} alt="관통" title="관통" />
            </div>
          </th>
          <th>
            <div className="character-icon">
              <img src={`/images/icons/타격.webp`} alt="타격" title="타격" />
            </div>
          </th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>내성</td>
          <td>내성</td>
          <td>내성</td>
        </tr>
        </tbody>
      </table>
  )
}

export default Resistances;
