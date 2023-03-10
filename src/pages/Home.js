import "styles.css";
import Header from "components/Header";
import Filter from "components/Filter";
import Character from "components/Character";
import {names, resistances, rarities, affinities, effects} from "data/filters";

function Home() {
  return (
      <div className="body">
        <Header />
        <section className="filter-section">
          <Filter items={names} category={"캐릭터"}/>
          <Filter items={rarities} category={"희귀도"}/>
          <Filter items={resistances} category={"내성"}/>
          <Filter items={affinities} category={"보유 죄악"} />
          <Filter items={effects} category={"스킬 효과"} />
        </section>
        <section className="character-section">
          <Character />
        </section>
      </div>
  );
}

export default Home;
