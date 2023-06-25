import * as S from "./styles";
import Status from "components/Table/Status";
import Resistances from "components/Table/Resistances";
import Skills from "components/Table/Skills";
import Passive from "components/Table/Passive";
import {useTranslation} from "react-i18next";

function Character({character}) {
  const { t, i18n } = useTranslation();
  return (
      <S.Container>
        <S.Information>
          <div>
            <S.SeasonText>{t(`season.${character.season}`)}</S.SeasonText>
            <S.NameText>{character.identity[i18n.language]} {(t(`characters.${character.name}`))}</S.NameText>
          </div>
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
        <S.Profile>
          <S.CharacterImage>
            <img src={`${process.env.PUBLIC_URL}/images/characters/${character.code}.webp`} alt={`${character.identity} ${character.name}`} loading={"lazy"}/>
          </S.CharacterImage>
          <S.ProfileTable>
            <Status status={character.status} />
            <Resistances resistances={character.resistances} />
          </S.ProfileTable>
        </S.Profile>
        <S.TablesWrap>
          <Skills skills={character.skills} />
          <Passive caption={t(`captions.passive`)} passive={character.passives[0]} />
          <Passive caption={t(`captions.support`)} passive={character.passives[1]} />
        </S.TablesWrap>
      </S.Container>
  );
}

export default Character;
