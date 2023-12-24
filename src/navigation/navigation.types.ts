import {HeroDTOProps} from '../services/heroAPI.types';

export type RootStackParamList = {
  Home: {};
  HeroDetail: {item: HeroDTOProps};
};
