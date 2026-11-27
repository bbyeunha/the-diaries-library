export type BilingualText = {
  es: string;
  en: string;
};

export type BilingualList = {
  es: string[];
  en: string[];
};

export type NoesisPlateKey =
  | 'euler'
  | 'vesalius'
  | 'harmonia'
  | 'connectome'
  | 'aerodynamics'
  | 'lorenz'
  | 'ephemeris'
  | 'psyche'
  | 'quantum';

export interface NoesisSubsection {
  title: BilingualText;
  items: BilingualList;
}

export interface NoesisChapter {
  number: string; // "01" .. "54"
  id: string; // "chapter-01"
  title: BilingualText;
  intro?: BilingualText;
  items?: BilingualList;
  subsections?: NoesisSubsection[];
  note?: BilingualText;
  plate?: {
    key: NoesisPlateKey;
    figure: string;
    caption: BilingualText;
    alt: BilingualText;
  };
}

export interface NoesisVolume {
  roman: string; // "I" .. "V"
  id: string; // "volume-i"
  title: BilingualText;
  subtitle: BilingualText;
  epigraph?: BilingualText;
  disclaimer?: BilingualText;
  chapters: NoesisChapter[];
}
