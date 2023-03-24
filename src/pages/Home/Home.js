import * as S from "./styles";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import Character from "components/Character/Character";
import {names, affinities, types, keywords} from "data/filters";
import {useEffect, useState} from "react";
import {useRecoilState} from "recoil";
import {FilterState} from "store/filterState";
import {characters} from "data/characters";

function Home() {
  const [items, setItems] = useState([]);
  const [results, setResults] = useState([]);
  const [filters,] = useRecoilState(FilterState);

  useEffect(() => {
    characters.then((appData) => {
      setItems(() => appData);
      setResults(() => appData);
    });
  },[]);

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
  },[filters])

  return (
      <S.Container>
        <Header />
        <S.FilterSection>
          <Filter items={names} name={"캐릭터"} category={"characters"}/>
          <Filter items={types} name={"유형"} category={"types"}/>
          <Filter items={affinities} name={"속성"} category={"affinities"}/>
          <Filter items={keywords} name={"스킬 키워드"} category={"keywords"}/>
        </S.FilterSection>
        <S.CharacterSection>
          {results ? results.map(character => <Character key={character.code} character={character} />) : null}
        </S.CharacterSection>
      </S.Container>
  );
}

export default Home;
