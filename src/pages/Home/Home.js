import * as S from "./styles";
import Header from "components/Header/Header";
import Filter from "components/Filter/Filter";
import Character from "components/Character/Character";
import {names, affinities, attacks} from "data/filters";
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

    if (filters.character.length > 0) {
      filterResults = items.filter(item => {
        return filters.character.some(cond => {
          return item.name === cond;
        })
      })
    }

    if (filters.affinity.length > 0 ) {
      filterResults = filterResults.filter(item => {
        return filters.affinity.every(cond => {
          return item.skills[0].affinity === cond || item.skills[1].affinity === cond || item.skills[2].affinity === cond;
        })
      })
    }

    if (filters.attack.length > 0) {
      filterResults = filterResults.filter(item => {
        return filters.attack.every(cond => {
          return item.skills[0].type === cond || item.skills[1].type === cond || item.skills[2].type === cond;
        })
      })
    }

    setResults(() => filterResults);


  },[filters])

  return (
      <S.Container>
        <Header />
        <S.FilterSection>
          <Filter items={names} name={"캐릭터"} category={"character"}/>
          <Filter items={attacks} name={"공격 타입"} category={"attack"}/>
          <Filter items={affinities} name={"보유 죄악"} category={"affinity"}/>
        </S.FilterSection>
        <S.CharacterSection>
          {results ? results.map(character => <Character key={character.code} character={character} />) : null}
        </S.CharacterSection>
      </S.Container>
  );
}

export default Home;
