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
    title: 'My Favourite kind of Peace',
    subtitle: 'The calm you carry everywhere',
    story:
       `I don't know how you do it, but there is something about you that makes everything feel a little better. Even on days when my mind is all over the place, talking to you or just having you around makes things feel easier. Maybe you don't realise it, but you have become one of my favourite parts of my everyday life.`,
    quote: "I don't know if you realise this, but you really do make my world a little more peaceful.",
    x: 20,
    y: 35,
    magnitude: 5.5,
  },
  {
    id: 'obs-cute',
    title: 'My cutest person',
    subtitle: 'The little things that make me smile',
    story:
      'Okay, I do not think I need to explain this one much. The way you talk, your expressions, your little reactions and sometimes even the random things you do... everything is just so cute. And I don not think I will ever get tired of saying that. You might disagree sometimes, but well, you are going to have to live with my opinion on this one.',
    quote: 'You are ridiculously cute, and I am definitely not taking that back.',
    x: 38,
    y: 20,
    magnitude: 6.0,
  },
  {
    id: 'obs-kind',
    title: 'A beautiful heat of yours (which is with me btw)',
    subtitle: 'The warmth you give without thinking',
    story:
      'One thing I really like about you is how kind you are. It is not something you do just to make people happy or to get noticed. It is just the way you are. The way you understand people, care about them and think about little things says a lot about you. I hope you never lose that part of yourself because it is genuinely one of my favourite things about you.',
    quote: 'Please never change that beautiful heart of yours.',
    x: 62,
    y: 24,
    magnitude: 5.8,
  },
  {
    id: 'obs-resilient',
    title: 'My strongest angry bird',
    subtitle: 'The strength I see in you every day',
    story:
      'I know things havent always been easy for you. And I know there are days when things get difficult and you might not feel your best. But I really want you to know that I see how much you handle and how you keep going. I wish you could sometimes see yourself the way I see you. You would realise how much strength you actually have. And no matter what, I hope you never forget that you dont have to figure everything out alone.',
    quote: 'On days you feel you arent strong enough, I hope you remember that I believe in you.',
    x: 80,
    y: 42,
    magnitude: 5.6,
  },
  {
    id: 'obs-open',
    title: 'The world you let me see',
    subtitle: 'The trust you have given me',
    story:
      'I really like that you share your thoughts with me, tell me about your day and let me know whats going on in your mind. I know opening up isnt always easy, and I genuinely value the fact that you trust me with that side of you. I want you to always feel that you can talk to me about anything, whether its something big, something silly or absolutely nothing important.',
    quote: 'I hope I always remain someone you can tell everything to.',
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
    title: '',
    subtitle: 'More to grow Flowers',
    description:
      'We both like flowers much, and there are more to grow yet. The garden is going to be wonderful which we will be maing',
    theme: 'bouquet',
    imageSrc: '/assets/bouquet.jpg',
    imageAlt: 'The bouquet I gave her',
    coordinates: 'NGC 2237 • Monoceros Cloud',
  },
  {
    id: 'milestone-bracelet',
    date: 'The bracelet',
    title: 'Pictures',
    subtitle: 'Gold and a little bit of pink',
    description:
      'Need to get more pictures of you as you can see the site also lack of picture',
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
    shortTitle: 'You are my peace',
    extendedText:
     'Talking to you makes even the most tiring days feel better. Sometimes I dont even need a solution to anything. Just talking to you is enough.',
    x: 18,
    y: 28,
    size: 5,
  },
  {
    id: 'reason-2',
    number: 2,
    shortTitle: 'Your hairs',
    extendedText:
      'Your hairs is what I am a fan off. Dont even thin of cutting it down or tae uneccessary advice seriously. You along with your hairs are perfect. (Helical structure btw)',
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
      'The small habits, the expressions, the things you do without thinking I notice all of them. They are the parts of you that make me smile the most.',
    x: 65,
    y: 15,
    size: 4.8,
  },
  {
    id: 'reason-5',
    number: 5,
    shortTitle: 'The way you open up to me',
    extendedText:
      'You let me be part of. You share things with me that you do not share with everyone. That means a lot. More than you probably know.',
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
    shortTitle: 'Your presence',
    extendedText:
      'Everytime you are there whenever I need you whether to discuss or describe or share or even fight you are there. ',
    x: 58,
    y: 65,
    size: 6.0,
  },
  {
    id: 'reason-8',
    number: 8,
    shortTitle: 'The way you care',
    extendedText:
      'This is the most interesting point. You care a lot for me, I really really like that and revealing a secret I like being cared by you sometimes even i like about unwellness',
    x: 38,
    y: 58,
    size: 4.8,
  },
  {
    id: 'reason-9',
    number: 9,
    shortTitle: 'You resonate with me ',
    extendedText:
      'Most of the time you are with when u r with me, its hard to quote but its like you listen to me you try to resonate with me even when I sounf off trac maing me love you even more',
    x: 22,
    y: 70,
    size: 5.3,
  },
  {
    id: 'reason-10',
    number: 10,
    shortTitle: 'That you chose me',
    extendedText:
      'Out of everything and everyone, you let me be part of your world. I think about that sometimes and it still surprises me in a good way. I am lucky, and I know it. And And these are not the only reason i love you but there are many more which i am unable to quote',
    x: 48,
    y: 84,
    size: 6.5,
  },
];

export const romanticLetterData: RomanticLetterData = {
  salutation: 'Dear Ishani,',
  paragraphs: [
    "First of all Love uuuuu ♥️♥️♥️♥️",
    "I don't really know how to put everything into words, and honestly, I don't think I ever will. But I still wanted to try because you deserve to know how much you mean to me.",
    "You know, you make my days better in ways you probably don't even realise. Sometimes it's just talking to you, sometimes it's the smallest things you do, and sometimes it's simply knowing that I have you. I don't think you understand how much happiness these little things bring me.There are so many things I love about you. The calmness you carry (especially when u mae me calm when I thin a lot), your cuteness (which honestly deserves a separate mention hehe), the kindness you show to people (sometimes over, oopsie), the way you stay strong even when things aren't easy (stongest warrior), and the way you open up to me and let me be a part of your world. I notice all these things, even the little ones, and I hope you never stop being the person you are. I know I might not always have the perfect words or know exactly how to express what I feel, but I hope you never have to doubt how special you are to me. I genuinely want to see you happy, achieve everything you dream of, and become everything you wish to be. And I hope I get to be there through all of it. I made this little space for you because I wanted to do something for you personally, something that you could look at and feel that someone put so much thought and love into making it just for you. And lastly, thank you for being you, for letting me know you the way I do, for trusting me, and for making me a part of your life. I hope this year brings you all the happiness you deserve.",
    "Happy Birthday once again, my favourite person. ♥️",
  ],
  closing: 'With lots of lots of lots of Love,',
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
