import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import Button from "../../components/Button";

import { useStateValue } from "../../hooks/useState";

export const timer = (run) => {
    const [time, setTime] = useState(0);
    const [running, setRunning] = useState(run);

    console.log(time)
    useEffect(() => {
      let interval;
      if (running) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
      } else if (!running) {
        clearInterval(interval);
      }
      return () => clearInterval(interval);
    }, [running]);

    return time
  };