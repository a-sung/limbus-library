import * as S from "./styles";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import Character from "components/Character/Character";
import {FilterState} from "store/filterState";
import {characters, getCharacters} from "data/characters";

import { useTranslation } from "react-i18next";

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

  useEffect(() => {
    // TODO: 데이터 불러오는 동안 로딩 아이콘 표시
    const newItems = getCharacters(i18n.language);
    newItems.then((appData) => {
      setItems(() => appData);
      setResults(() => appData);
    });
  }, [i18n.language]);

  useEffect (() => {
    let filterResults = items;
    if (filters.characters.length > 0) {
      filterResults = items.filter(item => {
        return filters.characters.some(cond => {
          return item.name === cond;
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
          return item.skills[0].desc.includes(cond) || item.skills[1].desc.includes(cond) || item.skills[2].desc.includes(cond);
        })
      })
    }
    setResults(() => filterResults);
  },[filters, i18n.language]);




  return (
      <S.Container>
        <Header />
        <S.FilterSection>
          <Filter items={t('filter.name.items', { returnObjects: true })} name={t('filter.name.name')} category={"characters"}/>
          <Filter items={t('filter.type.items', { returnObjects: true })} name={t('filter.type.name')} category={"types"}/>
          <Filter items={t('filter.affinity.items', { returnObjects: true })} name={t('filter.affinity.name')} category={"affinities"}/>
          <Filter items={t('filter.keyword.items', { returnObjects: true })} name={t('filter.keyword.name')} category={"keywords"}/>
        </S.FilterSection>
        <S.CharacterSection>
          {results ? results.map(character => <Character key={character.code} character={character} />) : null}
        </S.CharacterSection>
      </S.Container>
  );
}

export default Home;
