import React, { useState } from "react";
import useLongPress from "./useLongPress";

function Nestris() {
  const [longPressCount, setlongPressCount] = useState(0);
  const [clickCount, setClickCount] = useState(0);

  const onLongPress = () => {
    console.log("longpress is triggered");
    setlongPressCount(longPressCount + 1);
  };

  const onClick = () => {
    console.log("click is triggered");
    setClickCount(clickCount + 1);
  };

  const defaultOptions = {
    shouldPreventDefault: true,
    delay: 1000,
  };
  const longPressEvent = useLongPress(onLongPress, onClick, defaultOptions);

  return (
    <div className="App">
      <button {...longPressEvent}>use Loooong Press</button>
      <span>Long press count: {longPressCount}</span>
      <span>Click count: {clickCount}</span>
    </div>
  );
}

export default Nestris;
