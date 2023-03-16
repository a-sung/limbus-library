import "styles.css";
import Header from "components/Header";
import Filter from "components/Filter";
import Character from "components/Character";
import {names, resistances, rarities, affinities, effects} from "data/filters";
import {characters} from "data/characters";
import {useEffect, useState} from "react";

function Home() {
  const [results, setResults] = useState();
  useEffect(() => {
    characters.then((appData) => {
      setResults(() => appData);
    });
  },[])

  return (
      <div className="body">
        <Header />
        <section className="filter-section">
          <Filter items={names} category={"캐릭터"}/>
          <Filter items={rarities} category={"희귀도"}/>
          <Filter items={resistances} category={"공격 타입"}/>
          <Filter items={affinities} category={"보유 죄악"} />
          <Filter items={effects} category={"스킬 효과"} />
        </section>
        <section className="character-section">
          {results ? results.map(character => <Character key={character.code} character={character} />) : null}
        </section>
      </div>
  );
}

export default Home;
