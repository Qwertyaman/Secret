export interface ObservationStar {
  id: string;
  title: string;
  subtitle: string;
  story: string;
  quote: string;
  x: number; // 0-100 percentage in the constellation coordinate space
  y: number; // 0-100 percentage
  magnitude: number;
}

export interface TimelineMilestone {
  id: string;
  date: string;
  title: string;
  subtitle: string;
  description: string;
  theme: 'origin' | 'bouquet' | 'bracelet' | 'birthday';
  imageSrc?: string;
  imageAlt?: string;
  coordinates?: string;
}

export interface LoveReasonStar {
  id: string;
  number: number;
  shortTitle: string;
  extendedText: string;
  x: number;
  y: number;
  size: number;
}

export interface VoiceNoteData {
  title: string;
  duration: string;
  recordedDate: string;
  audioUrl?: string; // e.g. /assets/voicenote.mp3
  transcriptSnippet?: string;
}

export interface RomanticLetterData {
  salutation: string;
  paragraphs: string[];
  closing: string;
  signature: string;
  postScript?: string;
}
