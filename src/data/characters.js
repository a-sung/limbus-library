export const characters = getCharacters();

export async function getCharacters() {
  const sheetId = process.env.REACT_APP_SHEET_ID;
  const base = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?`;
  const sheetName = `${process.env.REACT_APP_SHEET_SINNER}`;
  const query = encodeURIComponent('Select *')
  const url = `${base}&sheet=${sheetName}&tq=${query}`

  const response = await fetch(url);
  const data = await response.text();
  let parsed = JSON.parse(data.substring(47).slice(0, -2))

  let items = parsed.table.rows
      .map(({ c }) => cleanRow(c))
      .map(([code, rarity, name, identity, health, speed, defense, slash, pierce, blunt,
              fir_name, fir_type, fir_aff, fir_pow, fir_desc,
              sec_name, sec_type, sec_aff, sec_pow, sec_desc,
              thi_name, thi_type, thi_aff, thi_pow, thi_desc,
              def_type, def_pow, def_aff, def_desc,
              passive_name, passive_aff, passive_cnt, passive_desc,
              support_name, support_aff, support_cnt, support_desc]) => ({
        code,
        rarity,
        name,
        identity,
        status:{health, speed, defense},
        resistances: {slash, pierce, blunt},
        skills: [
          {name: fir_name, type: fir_type, affinity: fir_aff, power: {count: fir_pow.split('/')[0], skill: fir_pow.split('/')[1], coin: fir_pow.split('/')[2]}, desc: fir_desc},
          {name: sec_name, type: sec_type, affinity: sec_aff, power: {count: sec_pow.split('/')[0], skill: sec_pow.split('/')[1], coin: sec_pow.split('/')[2]}, desc: sec_desc},
          {name: thi_name, type: thi_type, affinity: thi_aff, power: {count: thi_pow.split('/')[0], skill: thi_pow.split('/')[1], coin: thi_pow.split('/')[2]}, desc: thi_desc},
          {name: def_type, type: def_type, affinity: def_aff, power: {count: def_pow.split('/')[0], skill: def_pow.split('/')[1], coin: def_pow.split('/')[2]}, desc: def_desc}
        ],
        passives: [
          {name: passive_name, affinity: passive_aff, count: passive_cnt, desc: passive_desc},
          {name: support_name, affinity: support_aff, count: support_cnt, desc: support_desc},
        ]
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
