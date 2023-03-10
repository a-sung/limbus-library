function Character() {
  return (
      <div className="character-wrap">
        <div>이름</div>
        <div className="character-image">
          <img src=""/>
        </div>
        <div className="character-table-wrap">
          <div>
            <table className="character-table">
              <caption>스테이터스</caption>
              <thead>
                <tr>
                  <th>체력</th>
                  <th>속도</th>
                  <th>방어</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>138</td>
                  <td>4-8</td>
                  <td>10</td>
                </tr>
              </tbody>
            </table>
            <table className="character-table">
              <caption>내성 정보</caption>
              <thead>
                <tr>
                  <th>참격</th>
                  <th>관통</th>
                  <th>타격</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>내성</td>
                  <td>보통</td>
                  <td>취약</td>
                </tr>
              </tbody>
            </table>
          </div>
        <table className="character-table">
          <thead>
            <tr>
              <th>스킬1</th>
              <th>스킬2</th>
              <th>스킬2</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>관통</td>
              <td>타격</td>
              <td>관통</td>
            </tr>
            <tr>
              <td>분노</td>
              <td>탐식</td>
              <td>오만</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
  );
}

export default Character;
