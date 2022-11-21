import { Button, TextField } from "@mui/material";
import { ChangeEvent, SetStateAction, useState } from "react";
import Fields from "./Fields";

export default function CalculationPage() {
  const [value1, setValue1] = useState<number>(0);
  const [value2, setValue2] = useState<number>(0);
  const [operations, setOperations] = useState<number | string>("ADD");
  let [result, setResult] = useState<number | string>(0);

  const value1Handler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const Value1 = e.target.value;
    setValue1(parseInt(Value1));
    console.log("Value1" + e.target.value);
  };

  const value2Handler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let Value2 = e.target.value;
    setValue2(parseInt(Value2));
    console.log("Value2" + e.target.value);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let Operator = event.target.value;
    setOperations(Operator);
    console.log(Operator);
    
    switch (Operator) {
      case "ADD":
        result = value1 + value2;
        console.log(result);
        break;
      case "SUBTRACTION":
        result = value1 - value2;
        //console.log(Subtract);
        break;
      case "MULTIPLICATION":
        result = value1 * value2;
        //console.log(Multiply);
        break;
      case "DIVISION":
        result = value1 / value2;
       // console.log(Division);
        break;
      case "POWER":
       result = value1 ** value2;
        //console.log(Power);
        break;
      default:
    }
    setResult(result);
  };

  return (
    <>
      <Fields
        onChange={(e) => value1Handler(e)}
        onChange1={(e) => value2Handler(e)}
        handleChange={handleChange}
        operations={operations}
        result={result}
      />
    </>
  );
}
function operator(arg0: number) {
  throw new Error("Function not implemented.");
}
