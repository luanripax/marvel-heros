import {it, expect, describe, jest} from '@jest/globals';
import heroAPIService from './heroAPI.service';

describe('HeroAPI Service', () => {
  it('should return the hero list', async () => {
    const mockedResponse = {
      heroes: [
        {
          name: 'name',
          imageURL: 'image',
          description: 'desc',
          comics: [],
        },
        {
          name: 'name2',
          imageURL: 'image2',
          description: 'desc2',
          comics: [],
        },
      ],
      totalResults: 1000,
    };
    jest.spyOn(heroAPIService, 'fetch').mockResolvedValue(mockedResponse);
    const response = await heroAPIService.fetch(0);
    expect(response).toEqual(mockedResponse);
  });
});
