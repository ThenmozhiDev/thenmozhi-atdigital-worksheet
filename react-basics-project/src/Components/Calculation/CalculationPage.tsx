import { Button, TextField } from "@mui/material";
import { ChangeEvent, SetStateAction, useState } from "react";
import Fields from "./Fields";

export default function CalculationPage() {
  const [value1, setValue1] = useState<number>();
  const [value2, setValue2] = useState<number>();
  const [operations, setOperations] = useState<number | string>("ADD");
  let [result, setResult] = useState<number | string>("");

  const value1Handler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const Value1 = e.target.value;
    setValue1(parseFloat(Value1));
    console.log("Value1" + Value1);
  };

  const value2Handler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let Value2 = e.target.value;
    setValue2(parseFloat(Value2));
    console.log("Value2" + Value2);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let Operations = event.target.value;
    setOperations(Operations);
    console.log("operator" + Operations);

    if (value1 === undefined) {
      return value1;
    }
    if (value2 === undefined) {
      return value2;
    }
    switch (Operations) {
      case "ADD":
        result = value1 + value2;
        break;
      case "SUBTRACTION":
        result = value1 - value2;
        break;
      case "MULTIPLICATION":
        result = value1 * value2;
        break;
      case "DIVISION":
        result = value1 / value2;
        break;
      case "POWER":
        result = value1 ** value2;
        break;

      default:
    }

    if(value1 && Operations && !value2) {
      result = "";
    }
    if(!value1 && Operations && value2) {
      result = "";
    }
   console.log("before"+ result);
    setResult(result);
    console.log("after"+ result);
  };

  function Calculations() {   
    if (value1 === undefined) {
      return value1;
    }
    if (value2 === undefined) {
      return value2;
    }
   
    let FirstValue = value1 ;
    console.log("one" + FirstValue);
    let SecondValue =  value2;
    console.log("two" + SecondValue);
    let Operators = operations;
    console.log("calculate operator" + Operators);
    if (isNaN(FirstValue) || isNaN(SecondValue) ) {
      result = "";
      setResult(result)
      return;
    }
   
    switch (Operators) {
      case "ADD":
        result = FirstValue + SecondValue;
        console.log(result);
        break;
      case "SUBTRACTION":
        result = value1 - value2;
        break;
      case "MULTIPLICATION":
        result = value1 * value2;
        break;
      case "DIVISION":
        result = value1 / value2;
        break;
      case "POWER":
        result = value1 ** value2;
        break;
      default:
    }
    console.log(result);
    
    
    console.log("operator before" +result);
    setResult(result);
    console.log("operator after" +result);
  }

  return (
    <>
      <Fields
        onChange={(e) => value1Handler(e)}
        onChange1={(e) => value2Handler(e)}
        handleChange={handleChange}
        operations={operations}
        result={result}
        Calculations={Calculations}
      />
    </>
  );
}
