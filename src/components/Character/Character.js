import * as S from "./styles";
import Status from "./Status/Status";
import Resistances from "./Resistances/Resistances";
import Skills from "./Skills/Skills";

function Character({character}) {
  return (
      <S.Container>
        <S.Information>
          <S.NameText>{character.identity} {character.name}</S.NameText>
          {character.rarity === 1 ? <S.Icon width="14px" rarity><img src={`/images/icons/rarity/${character.rarity}.webp`}/></S.Icon>
              : character.rarity === 2 ? <S.Icon width="24px" rarity><img src={`/images/icons/rarity/${character.rarity}.webp`}/></S.Icon>
                  : <S.Icon width="36px" rarity><img src={`/images/icons/rarity/${character.rarity}.webp`}/></S.Icon>}
        </S.Information>
        <S.CharacterImage>
          <img src={`/images/characters/${character.code}.png`} alt={`${character.identity} ${character.name}`}/>
        </S.CharacterImage>
        <S.TablesWrap>
          <div className="tmp">
            <Status status={character.status} />
            <Resistances resistances={character.resistances} />
          </div>
          <Skills skills={character.skills} />
        </S.TablesWrap>
      </S.Container>
  );
}

export default Character;
