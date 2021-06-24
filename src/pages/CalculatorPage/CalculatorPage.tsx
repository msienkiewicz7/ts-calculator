import React from 'react';
import CalcButton from '../../components/CalcButton/CalcButton';
import styles from './CalculatorPage.module.css';


const inputKeys = [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['0', ',']]

const CalculatorPage = () => {

  return (
    <div className={styles.CalculatorPage} data-testid="CalculatorPage">
      <div className={styles.Calculator}> 
        
      {inputKeys.map(rowKeys => (
        <div className={styles.KeyRow}>
          {
            rowKeys.map(key => (
              <CalcButton key={key} inputKey={key} />
            ))
          }
        </div>

      ))}
      </div>
    </div>
  )
};

export default CalculatorPage;
