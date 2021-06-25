import React from 'react';
import styles from './CalcInput.module.css';

interface Props {
  value?: string
}

const CalcInput = ({value = ''}: Props) => (
  <div className={styles.CalcInput} data-testid="CalcInput">
    <input disabled={true} value={value}/>
  </div>
);

export default CalcInput;
