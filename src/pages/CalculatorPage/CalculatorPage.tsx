import React, { MouseEvent, useState } from 'react';
import CalcButton from '../../components/CalcButton/CalcButton';
import CalcInput from '../../components/CalcInput/CalcInput';
import { evaluate } from '../../utils/ExpressionEvaluator/evaluator';
import { validInput } from '../../utils/Validator/validator';
import styles from './CalculatorPage.module.css';


const inputKeys = [['7', '8', '9'], ['4', '5', '6'], ['1', '2', '3'], ['0', ',']]
const operationKeys = ['/', '*', '-', '+']

const CalculatorPage = () => {

  const [inputValue, setInputValue] = useState("");

  const handleInputKeyClick = (e: MouseEvent<HTMLButtonElement>) => {
    if (validInput(inputValue, e.currentTarget.value)) {
      setInputValue(inputValue.concat(e.currentTarget.value))
    }
  }

  const handleOparationKeyClick = (e: MouseEvent<HTMLButtonElement>) => {
    setInputValue(inputValue.concat(e.currentTarget.value))
  }

  const handleEquationKeyClick = (e: MouseEvent<HTMLButtonElement>) => {
    const result = evaluate(inputValue)
    setInputValue(String(result))
  }

  return (
    <div className={styles.CalculatorPage} data-testid="CalculatorPage">
      <div className={styles.Calculator}>

        <CalcInput value={inputValue} />

        <div className={styles.EvaluationKeys}>
            <CalcButton key={'C'} inputKey={'C'} onClick={handleInputKeyClick} />
            <CalcButton key={'='} inputKey={'='} onClick={handleEquationKeyClick} />
          </div>

        <div className={styles.Keys}>

          <div className={styles.InputKeys}>
            {inputKeys.map((rowKeys, rowId) => (
              <div className={styles.KeyRow} role="row" key={rowId}>
                {
                  rowKeys.map(key => (
                    <CalcButton key={key} inputKey={key} onClick={handleInputKeyClick} />
                  ))
                }
              </div>
            ))}
          </div>

          <div className={styles.OperationKeys}>
            {
              operationKeys.map(operationKey => (
                <CalcButton key={operationKey} inputKey={operationKey} onClick={handleOparationKeyClick} />
              ))
            }
          </div>

        </div>

      </div>
    </div>
  )
};

export default CalculatorPage;
