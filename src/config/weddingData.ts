export interface EventItem {
  id: string;
  title: string;
  date: string;
  fullDate: string;
  time: string;
  description: string;
  location: string;
  tag: string;
}

export interface WeddingConfig {
  brideName: string;
  groomName: string;
  brideParents: {
    father: string;
    mother: string;
  };
  groomParents: {
    father: string;
    mother: string;
  };
  weddingDate: string; // ISO string or parsable date format: YYYY-MM-DDTHH:mm:ss
  weddingDateFormatted: string;
  venue: {
    name: string;
    address: string;
    city: string;
    state: string;
    googleMapsUrl: string;
    mapCoordinates: {
      lat: number;
      lng: number;
    };
  };
  dressCode: {
    men: string;
    women: string;
    description: string;
  };
  invitationPoem: string[];
  events: EventItem[];
  audioUrl: string;
}

export const weddingData: WeddingConfig = {
  brideName: "Rinsha",
  groomName: "Salman",

  brideParents: {
    father: "Abdul Razak",
    mother: "Soudhabi",
  },

  groomParents: {
    father: "Salam",
    mother: "Ayisha",
  },

  // October 24, 2026 at 10:00 AM
  weddingDate: "2026-10-24T10:00:00",
  weddingDateFormatted: "October 24, 2026",

  venue: {
    name: "The Royal Grand Palace & Convention Center",
    address: "NH 66 Bypass, Near City Center, Calicut",
    city: "Kozhikode (Calicut)",
    state: "Kerala, India",
    googleMapsUrl: "https://maps.google.com/?q=Calicut+Convention+Center",
    mapCoordinates: {
      lat: 11.2588,
      lng: 75.7804,
    },
  },

  dressCode: {
    men: "BLUE SUITS",
    women: "BLUE DRESS",
    description: "Shades of Royal Blue & Navy Blue in Formal Elegance",
  },

  invitationPoem: [
    "With the blessings of our beloved families,",
    "we invite you to join us and honour the beautiful beginning",
    "of our journey together in eternal togetherness.",
  ],

  events: [
    {
      id: "haldi",
      title: "HALDI",
      date: "October 22",
      fullDate: "Thursday, October 22, 2026",
      time: "Evening (5:30 PM)",
      description: "A vibrant ceremony of love, golden turmeric blessings, and joyful laughter.",
      location: "Bridal Residence Garden",
      tag: "Traditional Ceremony",
    },
    {
      id: "mehendi",
      title: "MEHENDI",
      date: "October 23",
      fullDate: "Friday, October 23, 2026",
      time: "Night (7:00 PM)",
      description: "An enchanting evening filled with delicate henna, music, food, and celebration.",
      location: "Royal Heritage Courtyard",
      tag: "Sangeet & Henna",
    },
    {
      id: "nikkah",
      title: "NIKKAH",
      date: "October 24",
      fullDate: "Saturday, October 24, 2026",
      time: "10:00 AM",
      description: "The solemn and sacred matrimony solemnization under divine blessings.",
      location: "The Royal Grand Auditorium",
      tag: "Holy Matrimony",
    },
    {
      id: "reception",
      title: "RECEPTION",
      date: "October 24",
      fullDate: "Saturday, October 24, 2026",
      time: "1:00 PM",
      description: "A grand royal feast & joyous gathering to celebrate the newly married couple.",
      location: "The Grand Ballroom",
      tag: "Grand Banquet",
    },
  ],

  audioUrl: "/audio/invitation-song.mp3",
};
