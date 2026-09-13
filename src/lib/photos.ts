// Free-to-use Pexels stock photos standing in for real project photography.
// Swap these for the firm's own photos at launch — see README.
const px = (id: number, w: number) =>
  `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`

export const heroPhoto = {
  src: px(15456627, 1920),
  alt: 'Närbild underifrån på nyresta takstolar i trä mot klarblå himmel.',
}

type Photo = { src: string; alt: string }

export type Project =
  | { type: 'compare'; title: string; place: string; year: string; before: Photo; after: Photo }
  | { type: 'photo'; title: string; place: string; year: string; photo: Photo }

export const projects: Project[] = [
  {
    type: 'compare',
    title: 'Kök',
    place: 'Uppsala',
    year: '2024',
    before: { src: px(13652781, 800), alt: 'Daterat 1970-talskök i gult och brunt, före renovering.' },
    after: { src: px(37357036, 800), alt: 'Nyrenoverat vitt kök med rostfria vitvaror.' },
  },
  {
    type: 'compare',
    title: 'Badrum',
    place: 'Uppsala',
    year: '2023',
    before: { src: px(13413226, 800), alt: 'Äldre badrum med mönstrat kakel och radiator, före renovering.' },
    after: { src: px(6957081, 800), alt: 'Modernt renoverat badrum med kakel och jacuzzi-badkar.' },
  },
  {
    type: 'compare',
    title: 'Fasad',
    place: 'Jönköping',
    year: '2022',
    before: { src: px(29834173, 800), alt: 'Vittrad rödmålad husfasad med flagnande färg, före renovering.' },
    after: { src: px(17394427, 800), alt: 'Rad av nyrenoverade gråmålade hus med vita knutar.' },
  },
  {
    type: 'photo',
    title: 'Nybyggnation',
    place: 'Björklinge',
    year: '2023',
    photo: { src: px(39367476, 800), alt: 'Timmerstomme till nytt hus under uppförande, hantverkare synliga på taket.' },
  },
  {
    type: 'photo',
    title: 'Takomläggning',
    place: 'Storvreta',
    year: '2022',
    photo: { src: px(31763541, 800), alt: 'Rött tegeltak under omläggning, sett underifrån.' },
  },
  {
    type: 'photo',
    title: 'Snickeri',
    place: 'Uppsala',
    year: '2024',
    photo: { src: px(6790048, 800), alt: 'Snickare borrar i trä, närbild på händer och verktyg.' },
  },
]
