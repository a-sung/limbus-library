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
      .map(([code, rarity, name, identity_ko, identity_jp, identity_en,
              health, speed, defense,
              slash, pierce, blunt,
              fir_name_ko, fir_name_jp, fir_name_en, fir_type, fir_aff, fir_pow, fir_desc_ko, fir_desc_jp, fir_desc_en,
              sec_name_ko, sec_name_jp, sec_name_en, sec_type, sec_aff, sec_pow, sec_desc_ko, sec_desc_jp, sec_desc_en,
              thi_name_ko, thi_name_jp, thi_name_en, thi_type, thi_aff, thi_pow, thi_desc_ko, thi_desc_jp, thi_desc_en,
              def_type, def_pow, def_aff, def_desc_ko, def_desc_jp, def_desc_en,
              passive_name_ko, passive_name_jp, passive_name_en, passive_aff, passive_cnt, passive_desc_ko, passive_desc_jp, passive_desc_en,
              support_name_ko, support_name_jp, support_name_en, support_aff, support_cnt, support_desc_ko, support_desc_jp, support_desc_en]) => ({
        code,
        rarity,
        name,
        identity: {
          ko: identity_ko,
          jp: identity_jp,
          en: identity_en,
        },
        status:{health, speed, defense},
        resistances: {slash, pierce, blunt},
        skills: [
          {
            name: {ko:fir_name_ko, jp: fir_name_jp, en:fir_name_en},
            type: fir_type,
            affinity: fir_aff,
            power: {count: fir_pow.split('/')[0], skill: fir_pow.split('/')[1], coin: fir_pow.split('/')[2]},
            desc: {ko:fir_desc_ko, jp:fir_desc_jp, en:fir_desc_en}},
          {
            name: {ko:sec_name_ko, jp: sec_name_jp, en:sec_name_en},
            type: sec_type,
            affinity: sec_aff,
            power: {count: sec_pow.split('/')[0], skill: sec_pow.split('/')[1], coin: sec_pow.split('/')[2]},
            desc: {ko:sec_desc_ko, jp:sec_desc_jp, en:sec_desc_en}},
          {
            name: {ko:thi_name_ko, jp: thi_name_jp, en:thi_name_en},
            type: thi_type,
            affinity: thi_aff,
            power: {count: thi_pow.split('/')[0], skill: thi_pow.split('/')[1], coin: thi_pow.split('/')[2]},
            desc: {ko:thi_desc_ko, jp:thi_desc_jp, en:thi_desc_en}},
          {
            name: def_type,
            type: def_type,
            affinity: def_aff,
            power: {count: def_pow.split('/')[0], skill: def_pow.split('/')[1],coin: def_pow.split('/')[2]},
            desc: {ko:def_desc_ko, jp:def_desc_jp, en:def_desc_en}},
        ],
        passives: [
          {
            name: {ko:passive_name_ko, jp: passive_name_jp, en:passive_name_en},
            affinity: passive_aff,
            count: passive_cnt,
            desc: {ko:passive_desc_ko, jp:passive_desc_jp, en:passive_desc_en}},
          {
            name: {ko:support_name_ko, jp: support_name_jp, en:support_name_en},
            affinity: support_aff,
            count: support_cnt,
            desc: {ko:support_desc_ko, jp:support_desc_jp, en:support_desc_en}},
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
