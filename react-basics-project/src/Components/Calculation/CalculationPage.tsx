import { Button, TextField, Typography } from "@mui/material";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import Fields from "./Fields";

export default function CalculationPage() {
  const [value1, setValue1] = useState<number>(() => {
    const value1 = localStorage.getItem("value1") ?? "";
    return +value1;
  });
  console.log(value1);
  const [value2, setValue2] = useState<number>(() => {
    const value2 = localStorage.getItem("value2") ?? "";
    return +value2;
  });
  const [operations, setOperations] = useState<number | string>(() => {
    const saved = localStorage.getItem("operations");
    const initialvalue = JSON.parse(saved || "");
    console.log("vsfdsf" + saved);
    return initialvalue || "";
  });
  let [result, setResult] = useState<number | string>(() => {
    const saved = localStorage.getItem("result") ?? "";
    console.log("result" + saved);
    return saved;
  });

  const [save, setSave] = useState<string[]>(JSON.parse(localStorage.getItem("save")?? "")
  );

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
      case "+":
        result = value1 + value2;
        break;
      case "-":
        result = value1 - value2;
        break;
      case "*":
        result = value1 * value2;
        break;
      case "/":
        result = value1 / value2;
        break;
      case "^":
        result = value1 ** value2;
        break;
      default:
    }

    if (value1 && Operations && !value2) {
      result = "";
    }
    if (!value1 && Operations && value2) {
      result = "";
    }
    if (!value1 && Operations && !value2) {
      result = "";
    }
    console.log("before" + result);
    setResult(result);
    console.log("after" + result);
  };

  function Calculations() {
    if (value1 === undefined) {
      return value1;
    }
    if (value2 === undefined) {
      return value2;
    }

    let FirstValue = value1;
    console.log("one" + FirstValue);
    let SecondValue = value2;
    console.log("two" + SecondValue);
    let Operators = operations;
    console.log("calculate operator" + Operators);
    if (isNaN(FirstValue) || isNaN(SecondValue)) {
      result = "";
      setResult(result);
      return;
    }

    switch (Operators) {
      case "+":
        result = value1 + value2;
        console.log(result);
        break;
      case "-":
        result = value1 - value2;
        break;
      case "*":
        result = value1 * value2;
        break;
      case "/":
        result = value1 / value2;
        break;
      case "^":
        result = value1 ** value2;
        break;
      default:
    }


    
    console.log(result);

    console.log("operator before" + result);
    setResult(result);
    console.log("operator after" + result);
  }
  useEffect(() => {
    localStorage.setItem("value1", JSON.stringify(value1));
    localStorage.setItem("value2", JSON.stringify(value2));
    localStorage.setItem("operations", JSON.stringify(operations));
    localStorage.setItem("result", (result.toString()));
    localStorage.setItem("save", JSON.stringify(save));
  }, [value1, value2, operations, result, save]);

  const saveHandler = () => {
   
    const data = [
      value1 + " " + operations + " " + value2 + " " + "=" + " " + result,
    ];
    if(!value1 || !value2) {
      setSave([...save]);
    }
    else {
    setSave([...save, data[0]]);
    }
    console.log(data);
  };

  return (
    <>
      <Fields
        onChange={(e) => value1Handler(e)}
        onChange1={(e) => value2Handler(e)}
        handleChange={handleChange}
        operations={operations}
        result={result}
        Calculations={Calculations}
        value1={value1}
        value2={value2}
      />
      <Typography marginTop="30px" marginLeft="20px">
        <Button
          variant="contained"
          type="submit"
          onClick={saveHandler}
          style={{ padding: "10px 40px" }}
        >
          SAVE
        </Button>
      </Typography>
      {save.map((data, index: any) => (
        <Typography marginTop={4} marginLeft={3}>
          Saved value {data}
        </Typography>
      ))}
    </>
  );
}
