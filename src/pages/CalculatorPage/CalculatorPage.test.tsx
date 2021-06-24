import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CalculatorPage from './CalculatorPage';

describe('<CalculatorPage />', () => {
  test('it should mount', () => {
    render(<CalculatorPage />);
    
    const calculatorPage = screen.getByTestId('CalculatorPage');

    expect(calculatorPage).toBeInTheDocument();
  });
});