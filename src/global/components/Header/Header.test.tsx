import 'react-native';
import React from 'react';
import {render, screen} from '@testing-library/react-native';
import {it, expect} from '@jest/globals';
import Header from './Header.component';

it('should render all elements', () => {
  render(<Header title="mockTitle" marvelLogo onBack={() => null} />);
  const title = screen.getByText('mockTitle');
  const logo = screen.getByTestId('logo');
  const arrowIcon = screen.getByTestId('arrow');

  expect(title).toBeDefined();
  expect(logo).toBeDefined();
  expect(arrowIcon).toBeDefined();
});
