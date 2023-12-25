import {HeroDTOProps} from '../../../services/heroAPI.types';

export interface HeroCardProps {
  item: HeroDTOProps;
  handleDetails: (item: HeroDTOProps) => void;
}
