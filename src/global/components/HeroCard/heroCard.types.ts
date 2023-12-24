import {HeroDTOProps} from '../../../services/heroAPI.types';

export interface HeroCardProps {
  item: any;
  handleDetails: (item: HeroDTOProps) => void;
}
