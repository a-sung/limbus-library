import "styles.css";
import Header from "components/Header";
import Filter from "components/Filter";
import Character from "components/Character";
import {names, rarities, affinities, effects, attacks} from "data/filters";
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
      <div className="body">
        <Header />
        <section className="filter-section">
          <Filter items={names} name={"캐릭터"} category={"character"}/>
          {/*<Filter items={rarities} name={"희귀도"} category={"rarity"}/>*/}
          <Filter items={attacks} name={"공격 타입"} category={"attack"}/>
          <Filter items={affinities} name={"보유 죄악"} category={"affinity"}/>
          {/*<Filter items={effects} name={"스킬 효과"} category={"effect"} />*/}
        </section>
        <section className="character-section">
          {results ? results.map(character => <Character key={character.code} character={character} />) : null}
        </section>
      </div>
  );
}

export default Home;
