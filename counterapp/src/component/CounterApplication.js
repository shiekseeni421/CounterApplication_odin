import React, { useEffect, useState } from "react";
import { Button } from "antd";
import "./index.scss";

function CounterApplication({ countValue }) {
  const [counter, setCounter] = useState(countValue);
  const [meassage, setMeassage] = useState(false);
  const MaxCount = 10;

  useEffect(() => {
    if (counter > MaxCount) {
      setMeassage(true);
    }
  }, [counter]);

  const increment = () => {
    setCounter(counter + 1);
  };
  return (
    <div className="counter_container">
      <h1>Counter App</h1>
      {meassage == true && (
        <p className="alert_message">alert....Count is too high!</p>
      )}
      <p className="counter_value">{counter}</p>
      <Button className="Inc" type="primary" onClick={increment}>
        Increment
      </Button>
    </div>
  );
}

export default CounterApplication;
