import { Button, TextField, Typography } from "@mui/material";
import { stringify } from "querystring";
import { ChangeEvent, SetStateAction, useEffect, useState } from "react";
import Calculation from "./Calculation";
import Fields from "./Fields";
import LocalValues from "./LocalValues";

export default function CalculationPage() {
  const [value1, setValue1] = LocalValues<number | undefined>(
    "value1",
    undefined
  );
  const [value2, setValue2] = LocalValues<number | undefined>(
    "value2",
    undefined
  );
  const [operations, setOperations] = LocalValues<string>("operations", "");
  let [result, setResult] = LocalValues<number | string>("result", "");

  const [save, setSave] = LocalValues<string[]>("save", []);

  const value1Handler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const Value1 = e.target.value;
    setValue1(parseFloat(Value1));
  };

  const value2Handler = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let Value2 = e.target.value;
    setValue2(parseFloat(Value2));
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    let Operations = event.target.value;
    setOperations(Operations);
  };

  const Calculations = () => {
    let result = Calculation(value1, value2, operations);
    setResult(result);
  };
  const saveHandler = () => {
    const data =
      value1 + " " + operations + " " + value2 + " " + "=" + " " + result;
    if (value1 && value2) {
      setSave([...save, data]);
    }
  };
  useEffect(() => {
    Calculations();
  }, [value1, value2, operations]);

  return (
    <>
      <Fields
        onChange={value1Handler}
        onChange1={value2Handler}
        handleChange={handleChange}
        operations={operations}
        result={result}
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
      <Typography marginTop={4} marginLeft={3}>
        Saved Values
      </Typography>
      {save.map((data) => (
        <Typography marginTop={4} marginLeft={3}>
          {data}
        </Typography>
      ))}
    </>
  );
}
