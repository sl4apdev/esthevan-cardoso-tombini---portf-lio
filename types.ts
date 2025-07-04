
export interface SocialLink {
  name: string;
  url: string;
  iconUrl: string;
}

export interface Skill {
  name: string;
  iconUrl: string;
}

export type LocalizedString = {
  en: string;
  pt: string;
};

export type LocalizedStringArray = {
  en: string[];
  pt: string[];
};

export interface SectionData {
  id: string;
  title: LocalizedString;
  paragraphs: LocalizedStringArray;
  imageUrl: string;
  skills?: Skill[];
  socials?: SocialLink[];
}