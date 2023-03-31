import * as S from "./styles";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import Character from "components/Character/Character";
import {FilterState} from "store/filterState";
import {characters} from "data/characters";
import { useTranslation } from "react-i18next";
import {names, affinities, keywords, types} from "data/filters";

function Home() {
  const { t, i18n } = useTranslation();
  const [items, setItems] = useState([]);
  const [results, setResults] = useState([]);
  const [filters,] = useRecoilState(FilterState);

  useEffect(() => {
    characters.then((appData) => {
      setItems(() => appData);
      setResults(() => appData);
    });
  }, []);

  useEffect (() => {
    let filterResults = items;
    if (filters.characters.length > 0) {
      filterResults = items.filter(item => {
        return filters.characters.some(cond => {
          return String(item.name) === cond;
        })
      })
    }
    if (filters.affinities.length > 0 ) {
      filterResults = filterResults.filter(item => {
        return filters.affinities.every(cond => {
          return item.skills[0].affinity === cond || item.skills[1].affinity === cond || item.skills[2].affinity === cond;
        })
      })
    }
    if (filters.types.length > 0) {
      filterResults = filterResults.filter(item => {
        return filters.types.every(cond => {
          return item.skills[0].type === cond || item.skills[1].type === cond || item.skills[2].type === cond;
        })
      })
    }
    if (filters.keywords.length > 0) {
      filterResults = filterResults.filter(item => {
        return filters.keywords.every(cond => {
          return item.skills[0].desc[i18n.language].includes(t(`keywords.${cond}`))
              || item.skills[1].desc[i18n.language].includes(t(`keywords.${cond}`))
              || item.skills[2].desc[i18n.language].includes(t(`keywords.${cond}`))
        })
      })
    }
    setResults(() => filterResults);
  },[filters, i18n.language]);

  return (
      <S.Container>
        <Header />
        <S.FilterSection>
          <Filter items={names} name={t('filters.name')} category={"characters"}/>
          <Filter items={types} name={t('filters.type')} category={"types"}/>
          <Filter items={affinities} name={t('filters.affinity')} category={"affinities"}/>
          <Filter items={keywords} name={t('filters.keyword')} category={"keywords"}/>
        </S.FilterSection>
        <S.CharacterSection>
          {results ? results.map(character => <Character key={character.code} character={character} />) : null}
        </S.CharacterSection>
      </S.Container>
  );
}

export default Home;
