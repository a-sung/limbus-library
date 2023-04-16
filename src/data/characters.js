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
      .map(([code, id_ko, id_jp, id_en, name, rarity, hp, speed, defense, slash, pierce, blunt,
              s1_name_ko, s1_name_jp, s1_name_en, s1_desc_ko, s1_desc_jp, s1_desc_en, s1_type, s1_attr, s1_cc, s1_sp, s1_cp,
              s2_name_ko, s2_name_jp, s2_name_en, s2_desc_ko, s2_desc_jp, s2_desc_en, s2_type, s2_attr, s2_cc, s2_sp, s2_cp,
              s3_name_ko, s3_name_jp, s3_name_en, s3_desc_ko, s3_desc_jp, s3_desc_en, s3_type, s3_attr, s3_cc, s3_sp, s3_cp,
              d_type, d_attr, d_desc_ko, d_desc_jp, d_desc_en, d_cc, d_sp, d_cp,
              p_name_ko, p_name_jp, p_name_en, p_desc_ko, p_desc_jp, p_desc_en, p_attr, p_ac, p_type,
              sp_name_ko, sp_name_jp, sp_name_en, sp_desc_ko, sp_desc_jp, sp_desc_en, sp_attr, sp_ac, sp_type]) => ({
        code,
        rarity,
        name,
        identity: { ko: id_ko, jp: id_jp, en: id_en },
        status: { hp, speed, defense },
        resistances: { slash, pierce, blunt },
        skills: [
          {
            name: { ko: s1_name_ko, jp: s1_name_jp, en: s1_name_en },
            desc: { ko: s1_desc_ko, jp: s1_desc_jp, en: s1_desc_en },
            type: s1_type,
            affinity: s1_attr,
            cc: s1_cc,
            sp: s1_sp,
            cp: s1_cp
          },
          {
            name: { ko: s2_name_ko, jp: s2_name_jp, en: s2_name_en },
            desc: { ko: s2_desc_ko, jp: s2_desc_jp, en: s2_desc_en },
            type: s2_type,
            affinity: s2_attr,
            cc: s2_cc,
            sp: s2_sp,
            cp: s2_cp
          },
          {
            name: {ko: s3_name_ko, jp: s3_name_jp, en: s3_name_en},
            desc: {ko: s3_desc_ko, jp: s3_desc_jp, en: s3_desc_en},
            type: s3_type,
            affinity: s3_attr,
            cc: s3_cc,
            sp: s3_sp,
            cp: s3_cp
          },
          {
            name: d_type,
            type: d_type,
            affinity: d_attr,
            cc: d_cc,
            sp: d_sp,
            cp: d_cp,
            desc: { ko: d_desc_ko, jp: d_desc_jp, en: d_desc_en }
          },
        ],
        passives: [
          {
            name: { ko: p_name_ko, jp: p_name_jp, en: p_name_en },
            desc: { ko: p_desc_ko, jp: p_desc_jp, en: p_desc_en },
            affinity: p_attr,
            ac: p_ac,
            type: p_type,
          },
          {
            name: { ko: sp_name_ko, jp: sp_name_jp, en: sp_name_en },
            desc: { ko: sp_desc_ko, jp: sp_desc_jp, en: sp_desc_en },
            affinity: sp_attr,
            ac: sp_ac,
            type: sp_type
          }
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
