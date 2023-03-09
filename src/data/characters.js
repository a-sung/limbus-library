
export const characters = getCharacters();

async function getCharacters() {
  const sheetId = process.env.REACT_APP_SHEET_ID;
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = process.env.REACT_APP_SHEET_SINNER;
  const query = encodeURIComponent('Select *')
  const url = `${base}&sheet=${sheetName}&tq=${query}`

  const response = await fetch(url);
  const data = await response.text();
  let parsed = JSON.parse(data.substring(47).slice(0, -2))

  let items = parsed.table.rows
      .map(({ c }) => cleanRow(c))
      .map(([rarity, name, identity, health, speed, defense, buff, deBuff, slash, pierce, blunt, wrath, lust, sloth, gluttony, gloom, pride, envy]) => ({
        rarity,
        name,
        identity,
        status:{health, speed, defense},
        skill:{buff, deBuff},
        resistances: {slash, pierce, blunt},
        affinities: {wrath, lust, sloth, gluttony, gloom, pride, envy},
      }));

  return items
}
function cleanRow(row) {
  function replaceNull(item) {
    if (item == null) {
      return { v: '' }
    }
    return item
  }
  let data = row
      .map((item) => replaceNull(item))
      .map((item) => item.v)
  return data
}
