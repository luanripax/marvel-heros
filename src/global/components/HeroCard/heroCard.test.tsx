import 'react-native';
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {it, expect, jest} from '@jest/globals';
import HeroCard from './heroCard.component';
import {HeroDTOProps} from '../../../services/heroAPI.types';

const mockItem: HeroDTOProps = {
  name: 'name',
  description: 'desc',
  imageURL: 'image',
  comics: [
    {name: 'comic', resourceURI: 'uri'},
    {name: 'comic2', resourceURI: 'uri2'},
  ],
};

it('should render all elements', () => {
  render(<HeroCard item={mockItem} handleDetails={jest.fn()} />);
  const name = screen.getByText(mockItem.name);
  const image = screen.getByTestId('image');
  const comicLength = screen.getByTestId('comicLength');

  expect(name).toBeDefined();
  expect(image).toBeDefined();
  expect(image.props.source.uri).toBe(mockItem.imageURL);
  expect(comicLength).toBeDefined();
  expect(comicLength.children).toContain(mockItem.comics.length.toString());
});

it('should call handleDetails function when pressed', () => {
  const mockedFn = jest.fn();
  render(<HeroCard item={mockItem} handleDetails={mockedFn} />);

  const container = screen.getByTestId('container');
  fireEvent.press(container);

  expect(mockedFn).toBeCalled();
});
