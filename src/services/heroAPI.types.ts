export interface ComicSummary {
  resourceURI: string;
  name: string;
}

export interface ComicProps {
  available: number;
  returned: number;
  collectionURI: string;
  items: ComicSummary[];
}

export interface HeroProps {
  id: number;
  name: string;
  description: string;
  modified: Date;
  resourceURI: string;
  urls: string[];
  thumbnail: {path: string; extension: string};
  comics: ComicProps;
  stories: any;
  events: any;
  series: any;
}

export type HeroDTOProps = {
  name: string;
  imageURL: string;
  description: string;
  comics: ComicSummary[];
};
