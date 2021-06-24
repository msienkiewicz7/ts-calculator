import React from 'react';
import styles from './CalcInput.module.css';

interface Props {
  value: string
}

const CalcInput = (props: Props) => (
  <div className={styles.CalcInput} data-testid="CalcInput">
    <input disabled={true} value={props.value}/>
  </div>
);

export default CalcInput;
