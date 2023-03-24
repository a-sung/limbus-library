import { atom } from 'recoil';

export const FilterState = atom({
  key: 'FilterState',
  default: {
    characters: [],
    rarities: [],
    types: [],
    affinities: [],
    keywords: [],
  },
});

