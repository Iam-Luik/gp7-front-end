import "./styles.css";
import React, { useRef, useEffect, useState } from "react";

// one hour = 3600000
// one minute = 60000

export default function Countdown() {
  const [hour, setHour] = useState(1);
  const [min, setMin] = useState(30);
  
  let intervalRef = useRef();
  
  const decreaseMin = () => setMin((prev) => prev - 1);
  const decreaseHour = () => setHour((prev) => prev - 1);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseHour, 3600000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseMin, 60000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <div class="date-time"><h2>{hour}:{min}</h2></div>
    </div>
  );
}