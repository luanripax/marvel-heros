import 'react-native';
import React from 'react';
import {fireEvent, render, screen} from '@testing-library/react-native';
import {it, expect, jest} from '@jest/globals';
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

it('should call onback function when pressed on arrow', () => {
  const mockFn = jest.fn();
  render(<Header title="mockTitle" onBack={mockFn} />);
  const arrowIcon = screen.getByTestId('arrow');

  fireEvent.press(arrowIcon);
  expect(mockFn).toBeCalled();
});
