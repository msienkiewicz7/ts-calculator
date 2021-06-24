import React, { useState } from 'react';
import CalcButton from '../../components/CalcButton/CalcButton';
import CalcInput from '../../components/CalcInput/CalcInput';
import styles from './CalculatorPage.module.css';


const inputKeys = [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['0', ',']]

const CalculatorPage = () => {

  const [inputValue, setInputValue] = useState("");

  return (
    <div className={styles.CalculatorPage} data-testid="CalculatorPage">
      <div className={styles.Calculator}>

        <CalcInput value={inputValue}/>

        <div className={styles.InputKeys}>
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
    </div>
  )
};

export default CalculatorPage;
