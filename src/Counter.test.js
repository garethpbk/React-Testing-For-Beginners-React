import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Counter from './Counter';

test('<Counter />', () => {
  const { debug, getByTestId } = render(<Counter />);

  debug();

  expect(getByTestId('counter-button').tagName).toBe('BUTTON');
  expect(getByTestId('counter-button').textContent).toBe('0');
});
