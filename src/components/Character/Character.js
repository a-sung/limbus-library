import * as S from "./styles";
import Status from "./Status/Status";
import Resistances from "./Resistances/Resistances";
import Skills from "./Skills/Skills";

function Character({character}) {
  return (
      <S.Container>
        <S.NameText>{character.identity} {character.name}</S.NameText>
        <S.CharacterImage>
          <img src={`/images/characters/${character.code}.png`} alt={`${character.identity} ${character.name}`}/>
        </S.CharacterImage>
        <S.TablesWrap>
          <div className="tmp">
            <Status />
            <Resistances />
          </div>
          <Skills />
        </S.TablesWrap>
      </S.Container>
  );
}

export default Character;
