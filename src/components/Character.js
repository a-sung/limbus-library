function Character({character}) {
  return (
      <div className="character-wrap">
        <h1 className="character-name">{character.identity} {character.name}</h1>
        <div className="character-image">
          <img src={`/images/characters/${character.code}.png`} alt={`${character.identity} ${character.name}`}/>
        </div>
        <div className="character-table-wrap">
          <div>
            {/* status table */}
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
                  <td>{character.status.health}</td>
                  <td>{character.status.speed}</td>
                  <td>{character.status.defense}</td>
                </tr>
              </tbody>
            </table>
            {/* resistance table */}
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
                  <td>{character.resistances.slash}</td>
                  <td>{character.resistances.pierce}</td>
                  <td>{character.resistances.blunt}</td>
                </tr>
              </tbody>
            </table>
          </div>
        {/* skill table */}
        <table className="character-table skill">
          <caption>스킬 정보</caption>
          <thead>
            <tr>
              <th>스킬1</th>
              <th>스킬2</th>
              <th>스킬2</th>
            </tr>
          </thead>
          <tbody>
          <tr>
            {character.skills.map((skill, idx) => (
                <td key={idx}>
                  <div className="character-icon skill">
                    <img src={`/images/icons/${skill.type}.webp`} alt={skill.type} title={skill.type}/>
                  </div>
                  <div className="character-icon skill">
                    <img src={`/images/icons/${skill.affinity}.webp`} alt={skill.affinity} title={skill.affinity}/>
                  </div>
                </td>
            ))}
          </tr>
          </tbody>
        </table>
        </div>
      </div>
  );
}

export default Character;
