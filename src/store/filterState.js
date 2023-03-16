import { atom } from 'recoil';

export const FilterState = atom({
  key: 'FilterState',
  default: {
    character: [],
    rarity: [],
    attack: [],
    affinity: [],
  },
});

