import React from "react";
import styles from './output.module.css'

const OutputWindow = ({ outputDetails }) => {
  const getOutput = () => {
    let statusId = outputDetails?.status?.id;

    if (statusId === 6) {
      // compilation error
      return (
        <pre>
          {atob(outputDetails?.compile_output)}
        </pre>
      );
    } else if (statusId === 3) {
      return (
        <pre>
          {atob(outputDetails.stdout) !== null
            ? `${atob(outputDetails.stdout)}`
            : null}
        </pre>
      );
    } else if (statusId === 5) {
      return (
        <pre>
          {`Time Limit Exceeded`}
        </pre>
      );
    } else {
      return (
        <pre>
          {atob(outputDetails?.stderr)}
        </pre>
      );
    }
  };
  return (
    <div className={styles.output}>
      <h1>
        Output
      </h1><br />
      <div className={styles.outputDetails}>
        {outputDetails ? <>{getOutput()}</> : null}
      </div>
    </div>
  );
};

export default OutputWindow;
