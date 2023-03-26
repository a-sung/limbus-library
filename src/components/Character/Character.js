import * as S from "./styles";
import Status from "./Status/Status";
import Resistances from "./Resistances/Resistances";
import Skills from "./Skills/Skills";
import Passive from "./Passive/Passive";
import {useTranslation} from "react-i18next";

function Character({character}) {
  const { t, i18n } = useTranslation();
  return (
      <S.Container>
        <S.Information>
          <S.NameText>{character.identity[i18n.language]} {(t(`characters.${character.name}`))}</S.NameText>
          {character.rarity === 1 ?
            <S.Icon width="14px" rarity>
              <img src={`${process.env.PUBLIC_URL}/images/icons/rarity/${character.rarity}.webp`}/>
            </S.Icon>
            : character.rarity === 2 ?
              <S.Icon width="24px" rarity>
                <img src={`${process.env.PUBLIC_URL}/images/icons/rarity/${character.rarity}.webp`}/>
              </S.Icon>
                : <S.Icon width="36px" rarity>
                   <img src={`${process.env.PUBLIC_URL}/images/icons/rarity/${character.rarity}.webp`}/>
                  </S.Icon>}
        </S.Information>
        <S.CharacterImage>
          <img src={`${process.env.PUBLIC_URL}/images/characters/${character.code}.webp`} alt={`${character.identity} ${character.name}`} loading={"lazy"}/>
        </S.CharacterImage>
        <S.TablesWrap>
          <div>
            <Status status={character.status} />
            <Resistances resistances={character.resistances} />
          </div>
          <Skills skills={character.skills} />
          <Passive caption={t(`captions.passive`)} passive={character.passives[0]} />
          <Passive caption={t(`captions.support`)} passive={character.passives[1]} />
        </S.TablesWrap>
      </S.Container>
  );
}

export default Character;
