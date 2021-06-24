import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalcButton from './CalcButton';

describe('<CalcButton />', () => {
  test('it should mount', () => {
    render(<CalcButton />);
    
    const calcButton = screen.getByTestId('CalcButton');

    expect(calcButton).toBeInTheDocument();
  });
});