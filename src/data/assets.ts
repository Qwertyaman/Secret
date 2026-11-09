export interface StorybookAsset {
  id: string;
  name: string;
  src: string;
  alt: string;
  section: string;
  description: string;
}

export const storybookAssets: Record<string, StorybookAsset> = {
  storybookSky: {
    id: 'storybook-sky',
    name: 'Dreamy Pastel Celestial Clouds & Moon',
    src: '/assets/storybook-sky.jpg',
    alt: 'Pastel pink and purple clouds with golden stars and a crescent moon',
    section: 'Chapter 1 — Once Upon A Universe',
    description: 'Hero opening illustration setting the dreamy storybook atmosphere for Ishani.',
  },
  bouquet: {
    id: 'bouquet',
    name: 'The Garden',
    src: '/assets/bouquet.jpg',
    alt: 'The actual bouquet photograph from our journey',
    section: 'Chapter 3 — And Then, Our Story Began',
    description: 'Real photograph of the bouquet given to Ishani, inspiring the pink floral nebula.',
  },
  bracelet: {
    id: 'bracelet',
    name: 'The Picture',
    src: '/assets/bracelet.jpg',
    alt: 'The actual bracelet photograph with gemstones',
    section: 'Chapter 3 — And Then, Our Story Began',
    description: 'Real photograph of the bracelet given to Ishani, inspiring the golden planetary rings.',
  },
  voiceNote: {
    id: 'voicenote',
    name: 'Birthday Voice Note',
    src: '/assets/voicenote.mp3',
    alt: 'Audio recording for Ishani',
    section: 'Chapter 6 — One Last Thing, From My Heart',
    description: 'Voice note for Ishani requiring manual playback.',
  },
};

