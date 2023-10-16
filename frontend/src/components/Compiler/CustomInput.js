import React from "react";
import { classnames } from "../../utils/general";
import styles from './customInput.module.css'

const CustomInput = ({ customInput, setCustomInput }) => {
  return (
    <>
      <h1 className={styles.heading}>Custom Input</h1>
      <textarea
        rows="5"
        value={customInput}
        onChange={(e) => setCustomInput(e.target.value)}
        placeholder={`Custom input`}
        className={styles.textArea}
      ></textarea>
    </>
  );
};

export default CustomInput;
