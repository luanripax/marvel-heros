import axios from 'axios';
import md5 from 'md5';
import {HeroProps} from './heroAPI.types';

class HeroAPI {
  private readonly BASE_URL: string =
    'https://gateway.marvel.com/v1/public/characters';

  private readonly publicKey: string = '4a2b9b05fa2c929643f02dd79f11dd3e';

  private readonly privateKey: string =
    '0c16fb726309aabdedc6312c997d70e569677e10';

  private readonly resultsPerPage: number = 20;

  fetch = async (page: number) => {
    const timestamp = Number(new Date());
    const data = await axios.get(this.BASE_URL, {
      params: {
        apikey: this.publicKey,
        ts: timestamp,
        hash: md5(`${timestamp}${this.privateKey}${this.publicKey}`),
        limit: this.resultsPerPage,
        offset: page * this.resultsPerPage,
      },
    });
    const heroesDTO = data?.data?.data?.results.map((item: HeroProps) => {
      return {
        name: item?.name,
        imageURL: `${item?.thumbnail?.path}.${item?.thumbnail?.extension}`,
        description: item?.description,
        comics: item?.comics?.items,
      };
    });
    return {heroes: heroesDTO, totalResults: data?.data?.data?.total};
  };
}

export default new HeroAPI();
