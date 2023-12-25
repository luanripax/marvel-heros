import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it, expect} from '@jest/globals';
import ComicCard from './comicCard.component';

it('should render all elements', () => {
  render(<ComicCard name="mockName" />);
  const name = screen.getByText('mockName');
  const logo = screen.getByTestId('logo');

  expect(name).toBeDefined();
  expect(logo).toBeDefined();
});
