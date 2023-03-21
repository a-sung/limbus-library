import Status from "./Status/Status";
import Resistances from "./Resistances/Resistances";
import Skills from "./Skills/Skills";

function Character({character}) {
  return (
      <div className="character-wrap">
        <h1 className="character-name">{character.identity} {character.name}</h1>
        <div className="character-image">
          <img src={`/images/characters/${character.code}.png`} alt={`${character.identity} ${character.name}`}/>
        </div>
        <div className="character-table-wrap">
          <div>
            <Status />
            <Resistances />
          </div>
        <Skills />
        </div>
      </div>
  );
}

export default Character;
