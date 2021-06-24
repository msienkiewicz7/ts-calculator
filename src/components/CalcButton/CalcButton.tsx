import React from 'react';
import styles from './CalcButton.module.css';

interface Props {
  inputKey: string
}

const CalcButton = (props: Props) => (
  <div className={styles.CalcButton} data-testid="CalcButton">
    <button>{props.inputKey}</button>
  </div>
);

export default CalcButton;
