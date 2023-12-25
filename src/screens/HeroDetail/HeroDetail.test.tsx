import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it, expect, jest, describe} from '@jest/globals';
import HeroDetailScreen from './HeroDetail.screen';
import {HeroDTOProps} from '../../services/heroAPI.types';

const mockedItem: HeroDTOProps = {
  name: 'name',
  description: 'description',
  imageURL: 'image',
  comics: [
    {name: 'comic', resourceURI: 'uri'},
    {name: 'comic2', resourceURI: 'uri2'},
  ],
};

const emptyMockedItem: HeroDTOProps = {
  name: 'name',
  description: '',
  imageURL: 'image',
  comics: [],
};

jest.mock('@react-navigation/native');

describe('HeroDetailScreen', () => {
  it('renders hero details', () => {
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({
        navigate: jest.fn(),
        goBack: jest.fn(),
      });

    jest
      .spyOn(require('@react-navigation/native'), 'useRoute')
      .mockReturnValue({
        params: {
          item: mockedItem,
        },
      });

    render(<HeroDetailScreen />);

    const name = screen.getByText(mockedItem.name);
    const description = screen.getByText(mockedItem.description);
    const image = screen.getByTestId('image');
    const comics = screen.getByTestId('comics');

    expect(name).toBeDefined();
    expect(description).toBeDefined();
    expect(image.props.source.uri).toBe(mockedItem.imageURL);
    expect(comics.props.data).toEqual(mockedItem.comics);
  });

  it('renders text for empty description and empty comics', () => {
    jest
      .spyOn(require('@react-navigation/native'), 'useNavigation')
      .mockReturnValue({
        navigate: jest.fn(),
        goBack: jest.fn(),
      });

    jest
      .spyOn(require('@react-navigation/native'), 'useRoute')
      .mockReturnValue({
        params: {
          item: emptyMockedItem,
        },
      });
    render(<HeroDetailScreen />);

    const emptyDescription = screen.getByText('No description provided');
    const emptyComics = screen.getByText('None');

    expect(emptyDescription).toBeDefined();
    expect(emptyComics).toBeDefined();
  });
});
