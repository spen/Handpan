import { distance } from '@tonaljs/tonal';
import { map, first } from 'lodash';

// Scales are taken from one of the following resources: 
// - https://sites.google.com/site/handpanscales/home/celtic-minor
// - https://www.meridianhandpans.co.uk/

export const handpanScales = [
  {
    name: 'Amara',
    notes: ['C3', 'G3', 'Bb4', 'C4', 'D4', 'Eb4', 'F4', 'G4'],
  },
  {
    name: 'Voyager',
    notes: ['F3', 'Ab3', 'C4', 'Eb4', 'F4', 'G4', 'Ab4', 'C5', 'Eb5'],
  },
  {
    name: 'Equinox',
    notes: ['E2', 'G2', 'B2', 'D3', 'E3', 'F#3', 'G3', 'B3', 'D4'],
  },
  {
    name: 'Minor',
    notes: ['F3', 'Bb3', 'C4', 'Db4', 'Eb4', 'F4', 'G4', 'Ab4', 'C5'],
  },
  {
    name: 'Hijaz',
    notes: ['F3', 'A#3', 'B3', 'D4', 'D#4', 'G#4', 'F#5', 'A#5'],
  },
  {
    name: 'Pygmy',
    notes: ['F2', 'G2', 'Ab2', 'C3', 'Eb3', 'F3', 'G3', 'C4'],
  },
  {
    name: 'Integral',
    notes: [ 'D3', 'A3', 'A#3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4' ],
  },
  {
    name: 'SaBye',
    notes: [ 'E3', 'A3', 'B3', 'C#4', 'D#4', 'E4', 'F#4', 'G#4', 'B4' ],
  },
  {
    name: 'Celtic Minor',
    notes: [ 'D3', 'A3', 'C4', 'D4', 'E4', 'F4', 'G4', 'A4', 'C5' ],
  },
  {
    name: 'Raga Desh',
    notes: [ 'C#3', 'G#3', 'B3', 'C#4', 'E#4', 'F#4', 'G#4', 'B4', 'C#5' ],
  },
  {
    name: 'Oxalista',
    notes: [ 'G3', 'B3', 'C4', 'D4', 'E4', 'G4', 'A4', 'B4', 'C5', 'D5'  ],
  },
  {
    name: 'Oxalis',
    notes: [ 'A3', 'C#4', 'D4', 'E4', 'F#4', 'A4', 'C#5', 'D5', 'E5' ],
  },
  {
    name: 'La Sirena',
    notes: [ 'E', 'G', 'B', 'C#', 'D', 'E', 'F#', 'G', 'B', 'C#' ],
  },
];

const scaleData = map(handpanScales, (scale) => ({
  ...scale,
  intervals: scale.notes.map((note) => distance(first(scale.notes), note)),
}));

export default scaleData;
