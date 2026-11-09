import {
  ObservationStar,
  TimelineMilestone,
  LoveReasonStar,
  VoiceNoteData,
  RomanticLetterData,
} from '../types/celestial';

export const ishaniProfile = {
  name: 'Ishani',
  birthdayDateString: 'November 10, 2026',
  targetBirthdayTimestamp: new Date('2026-11-10T00:00:00').getTime(),
  relationshipStartDate: 'May 9, 2026',
  tagline: 'A little universe, made just for you.',
  subtext: 'Every page of this was written thinking of you.',
};

// Five qualities I love about her — the emotional centre of Chapter 2
export const fiveObservations: ObservationStar[] = [
  {
    id: 'obs-calm',
    title: 'Your quiet kind of magic',
    subtitle: 'The calm you carry everywhere',
    story:
      'There is a stillness about you that I cannot explain. When you are around, everything slows down in the best possible way. The noise of the world dims, and something in my chest just settles. I do not think you realise how much of that is entirely you.',
    quote: 'The most calming thing in my life has always been simply having you close.',
    x: 20,
    y: 35,
    magnitude: 5.5,
  },
  {
    id: 'obs-cute',
    title: 'The cutest little universe',
    subtitle: 'The little things that make me smile',
    story:
      'The way you do certain things — the small expressions, the tiny reactions, the moments you do not even notice — make me smile in a way I cannot stop. You are genuinely, effortlessly, impossibly cute. And I am so glad I get to be the one who notices.',
    quote: 'You make ordinary moments feel like the best part of my day.',
    x: 38,
    y: 20,
    magnitude: 6.0,
  },
  {
    id: 'obs-kind',
    title: 'A heart that is always kind',
    subtitle: 'The warmth you give without thinking',
    story:
      'You are kind in a way that feels completely natural to you — as if you cannot imagine being anything else. You treat people with a warmth that they carry with them long after you have left the room. That kind of goodness is rare, and I think about it more than you know.',
    quote: 'Your kindness is not something you do. It is something you simply are.',
    x: 62,
    y: 24,
    magnitude: 5.8,
  },
  {
    id: 'obs-resilient',
    title: 'Stronger than you realise',
    subtitle: 'The strength I see in you every day',
    story:
      'Life has handed you difficult moments, and you have moved through them with a quiet steadiness that honestly amazes me. You do not make a show of it. You just keep going. I have so much respect for the strength you carry, even on the days you feel like you have none left.',
    quote: 'You are braver than you give yourself credit for. I see it even when you cannot.',
    x: 80,
    y: 42,
    magnitude: 5.6,
  },
  {
    id: 'obs-open',
    title: 'The world you let me see',
    subtitle: 'The trust you have given me',
    story:
      'The fact that you let me in — that you share your thoughts, your feelings, the parts of yourself you do not show everyone — means more to me than I can say. Being trusted by you feels like a privilege. I will always try to be worthy of it.',
    quote: 'You let me into your world, and that is my favourite place to be.',
    x: 50,
    y: 68,
    magnitude: 6.5,
  },
];

export const timelineMilestones: TimelineMilestone[] = [
  {
    id: 'milestone-origin',
    date: 'May 9, 2026',
    title: 'The day our story began',
    subtitle: 'Where everything started',
    description:
      'I remember thinking that day felt a little different from the others. I did not know then that it would become the date I think about most. That was the day things between us started, and I am so glad they did.',
    theme: 'origin',
    coordinates: 'RA 04h 35m 55s • Dec +16° 30′ 33″',
  },
  {
    id: 'milestone-bouquet',
    date: 'The bouquet',
    title: 'A little something for you',
    subtitle: 'Pink flowers and soft wrapping',
    description:
      'I wanted to give you something that felt as gentle as you are. So I found flowers — soft pink ones — and I hoped when you saw them, you would know that this was me saying I am glad you are in my life.',
    theme: 'bouquet',
    imageSrc: '/assets/bouquet.jpg',
    imageAlt: 'The bouquet I gave her',
    coordinates: 'NGC 2237 • Monoceros Cloud',
  },
  {
    id: 'milestone-bracelet',
    date: 'The bracelet',
    title: 'Something to carry with you',
    subtitle: 'Gold and a little bit of pink',
    description:
      'A delicate gold bracelet with small pink stones. I wanted you to have something you could wear and have close to you, something small that maybe reminded you that I am thinking of you.',
    theme: 'bracelet',
    imageSrc: '/assets/bracelet.jpg',
    imageAlt: 'The bracelet I gave her',
    coordinates: 'Cassiopeia Circuit • Golden Meridian',
  },
  {
    id: 'milestone-birthday',
    date: 'November 10, 2026',
    title: 'Happy birthday, Ishani',
    subtitle: 'Today is all yours',
    description:
      'I made all of this for you. Every word, every little detail — it was all thought of with you in mind. I hope today reminds you of how loved you are.',
    theme: 'birthday',
    coordinates: 'Solar Apex • Infinite Horizon',
  },
];

export const tenLoveReasons: LoveReasonStar[] = [
  {
    id: 'reason-1',
    number: 1,
    shortTitle: 'The way you make me feel calm',
    extendedText:
      'Being around you is the easiest thing. The anxiety in my head quiets down, and I just feel okay. That is not something I have always had, and I do not take it for granted.',
    x: 18,
    y: 28,
    size: 5,
  },
  {
    id: 'reason-2',
    number: 2,
    shortTitle: 'Your laugh',
    extendedText:
      'Your real, actual laugh — the one that comes out when something genuinely catches you off guard — is one of the best things I know. I think about it more than you realise.',
    x: 32,
    y: 18,
    size: 4.5,
  },
  {
    id: 'reason-3',
    number: 3,
    shortTitle: 'How genuinely kind you are',
    extendedText:
      'You are kind without needing anyone to notice. You just are. And I think that says everything about who you are as a person.',
    x: 48,
    y: 22,
    size: 5.5,
  },
  {
    id: 'reason-4',
    number: 4,
    shortTitle: 'The little things you do',
    extendedText:
      'The small habits, the expressions, the things you do without thinking — I notice all of them. They are the parts of you that make me smile the most.',
    x: 65,
    y: 15,
    size: 4.8,
  },
  {
    id: 'reason-5',
    number: 5,
    shortTitle: 'The way you open up to me',
    extendedText:
      'You let me in. You share things with me that you do not share with everyone. That means a lot. More than you probably know.',
    x: 82,
    y: 30,
    size: 5.2,
  },
  {
    id: 'reason-6',
    number: 6,
    shortTitle: 'Your strength',
    extendedText:
      'You have been through things that were hard, and you kept going. I find that genuinely impressive. You are stronger than you give yourself credit for.',
    x: 75,
    y: 52,
    size: 5.0,
  },
  {
    id: 'reason-7',
    number: 7,
    shortTitle: 'That you are you',
    extendedText:
      'I do not think I need to dress it up. You being exactly who you are — that is enough. It is more than enough. It is everything.',
    x: 58,
    y: 65,
    size: 6.0,
  },
  {
    id: 'reason-8',
    number: 8,
    shortTitle: 'The way you care',
    extendedText:
      'When you care about something — or someone — you really mean it. It comes through in everything you do. That kind of sincerity is rare and I love that about you.',
    x: 38,
    y: 58,
    size: 4.8,
  },
  {
    id: 'reason-9',
    number: 9,
    shortTitle: 'How easy it is to be with you',
    extendedText:
      'There is no performance with you. I do not have to be anything other than myself. That comfort — the kind where you can just exist — is something I value more than I can say.',
    x: 22,
    y: 70,
    size: 5.3,
  },
  {
    id: 'reason-10',
    number: 10,
    shortTitle: 'That you chose me',
    extendedText:
      'Out of everything and everyone, you let me be part of your world. I think about that sometimes and it still surprises me in a good way. I am lucky, and I know it.',
    x: 48,
    y: 84,
    size: 6.5,
  },
];

export const romanticLetterData: RomanticLetterData = {
  salutation: 'Dear Ishani,',
  paragraphs: [
    'I have been trying to write this for a while. Every time I started, it felt like too much or not enough. So I decided to just be honest, the way I always want to be with you.',
    'You make my life better. That is the simplest way I can say it. Not in a dramatic way, not in a way I could have predicted — just quietly, consistently, in the small moments that add up to everything.',
    'I notice things about you. I notice the way you carry yourself, the way you are kind without thinking about it, the way you make people feel heard just by being present. I notice how strong you are, even when you do not feel like it. I notice how much it means that you let me in.',
    'Today is your birthday, and I wanted you to have something that felt personal. Something made just for you, with real thought behind it. I hope this is that.',
    'Thank you for being in my life. Thank you for letting me be in yours. I do not take any of it lightly.',
  ],
  closing: 'With love,',
  signature: 'Always yours',
  postScript: 'P.S. I hope today is as wonderful as you are.',
};

export const voiceNoteData: VoiceNoteData = {
  title: 'A little something to hear',
  duration: '01:28',
  recordedDate: 'Recorded for November 10, 2026',
  audioUrl: '/assets/voicenote.mp3',
  transcriptSnippet: '"Happy birthday, Ishani. I wanted you to actually hear me say it..."',
};
