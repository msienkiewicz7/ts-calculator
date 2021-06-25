import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalcInput from './CalcInput';

describe('<CalcInput />', () => {
  test('it should mount', () => {
    render(<CalcInput />);
    
    const calcInput = screen.getByTestId('CalcInput');

    expect(calcInput).toBeInTheDocument();
  });

  test('it should contain only one HTML element', () => {
    render(<CalcInput />);
    const calcInput = screen.getByTestId('CalcInput');
    expect(calcInput.childNodes).toHaveLength(1)
  })
});