import "./styles.css";
import React, { useRef, useEffect, useState } from "react";
import Api from "../../services/api";

export default function Countdown() {

  const [hour, setHour] = useState();
  const [min, setMin] = useState();
  const [seg, setSeg] = useState();

  Api.get("http://localhost:8080/locacao/consultar-locacao/" + sessionStorage.getItem("idLocacao"))
    .then((response) => {
      setHour(new Date(new Date(response.data.dataHoraDevolucao).getTime() - new Date(Date.now()).getTime()).getHours())
      setMin(new Date(new Date(response.data.dataHoraDevolucao).getTime() - new Date(Date.now()).getTime()).getMinutes())
      setSeg(new Date(new Date(response.data.dataHoraDevolucao).getTime() - new Date(Date.now()).getTime()).getSeconds())
      // new Date(new Date(response.data.dataHoraDevolucao).getTime() - new Date().getTime())

      console.log(new Date(new Date(response.data.dataHoraDevolucao).getTime() - new Date().getTime()).toISOString())
    })
    .catch((err) => {
      console.error("ops! ocorreu um erro" + err);
    });


  let intervalRef = useRef();

  const decreaseMin = () => setMin((prev) => prev - 1);
  const decreaseHour = () => setHour((prev) => prev - 1);
  const decreaseSeg = () => setSeg((prev) => prev - 1);


  useEffect(() => {
    intervalRef.current = setInterval(decreaseHour, 3600000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseMin, 60000);

    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    intervalRef.current = setInterval(decreaseSeg, 1000);

    return () => clearInterval(intervalRef.current);
  }, []);

  return (
    <div>
      <div class="date-time"><h2>{hour > 10 ? hour : "0" + hour}:{min > 10 ? min : "0" + min}:{seg > 10 ? seg : "0" + seg}</h2></div>
    </div>
  );
}