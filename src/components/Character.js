function Character({character}) {
  return (
      <div className="character-wrap">
        <div>{character.identity} {character.name}</div>
        <div className="character-image">
          <img src={`/images/characters/${character.code}.png`} alt={`${character.identity} ${character.name}`}/>
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
                  <td>{character.status.health}</td>
                  <td>{character.status.speed}</td>
                  <td>{character.status.defense}</td>
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
                  <td>{character.resistances.slash}</td>
                  <td>{character.resistances.pierce}</td>
                  <td>{character.resistances.blunt}</td>
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
              <td>{character.skills[0].type}</td>
              <td>{character.skills[1].type}</td>
              <td>{character.skills[2].type}</td>
            </tr>
            <tr>
              <td>{character.skills[0].affinity}</td>
              <td>{character.skills[1].affinity}</td>
              <td>{character.skills[2].affinity}</td>
            </tr>
          </tbody>
        </table>
        </div>
      </div>
  );
}

export default Character;
