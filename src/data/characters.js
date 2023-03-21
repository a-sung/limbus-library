
export const characters = getCharacters();

export async function getCharacters() {
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
      .map(([code, rarity, name, identity, health, speed, defense, slash, pierce, blunt,
              fir_name, fir_type, fir_aff, fir_pow, sec_name, sec_type, sec_aff, sec_pow, thi_name, thi_type, thi_aff, thi_pow, def_type, def_pow, def_aff]) => ({
        code,
        rarity,
        name,
        identity,
        status:{health, speed, defense},
        resistances: {slash, pierce, blunt},
        skills: [
          {name: fir_name, type: fir_type, affinity: fir_aff, power: fir_pow},
          {name: sec_name, type: sec_type, affinity: sec_aff, power: sec_pow},
          {name: thi_name, type: thi_type, affinity: thi_aff, power: thi_pow},
          {name: def_type, type: def_type, affinity: def_aff, power: def_pow}
        ],
        defense: {name: def_type, type: def_type, affinity: def_aff, power: def_pow},
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
