import React from 'react';
import styles from './CalcButton.module.css';

interface Props {
  inputKey: string,
  onClick: React.MouseEventHandler
}

const CalcButton = (props: Props) => (
  <div className={styles.CalcButton} data-testid="CalcButton">
    <button value={props.inputKey} onClick={props.onClick}>{props.inputKey}</button>
  </div>
);

export default CalcButton;
