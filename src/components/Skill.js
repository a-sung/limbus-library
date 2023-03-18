function Skill() {
  return (
      <div className="skill-container">
        <div className="skill-power-container">
          {/* 스킬 위력 */}
          <div className="skill-coin-power">
            <div className="skill-coin-power-text">+6</div>
          </div>
          {/* 스킬 아이콘 */}
          <div className="skill-icon-container">
            <div className="skill-icon-wrap">
              <img src={`/images/우울.webp`} />
            </div>
            <div className="skill-power">7</div>
          </div>
        </div>
        {/* 스킬 유형 */}
        <div className="skill-detail-wrap">
          <div className="coin-wrap">
            <div className="coin-icon"> <img src={`/images/icons/coin.webp`} /></div>
            <div className="coin-icon"> <img src={`/images/icons/coin.webp`} /></div>
            <div className="coin-icon"> <img src={`/images/icons/coin.webp`} /></div>
          </div>
          <div className="skill-name-wrap">스킬 1</div>
          <div>
            <div className="character-icon skill">
              <img src={`/images/icons/참격.webp`} />
            </div>
            <div className="character-icon skill">
              <img src={`/images/icons/우울.webp`} />
            </div>
          </div>
        </div>
      </div>

  );
}

export default Skill;
