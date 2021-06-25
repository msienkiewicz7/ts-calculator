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

  test('it shows calculator keys', () => {
    render(<CalculatorPage />);
    const inputKeys = [
      '7','8','9','4','5','6','1','2','3','0',',', // input keys
      '/', '*', '-', '+', // operation keys
      'C', '='  // evaluation keys
    ]
    inputKeys.forEach(key => {
      expect(screen.getByText(key)).toBeInTheDocument()
    })
  });

  test('it shows 4 input key rows', () => {
    render(<CalculatorPage />);
    const rows = screen.getAllByRole('row');
    expect(rows).toHaveLength(4)
  });



});