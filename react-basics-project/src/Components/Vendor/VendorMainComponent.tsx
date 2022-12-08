import { Button, SelectChangeEvent, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CartoonHeader from "../CartoonHeader";

import VendorElement from "./VendorElement";
import VendorHeader from "./VendorHeader";


export default function VendorMainComponent() {
  const [addCartoon, setAddCartoon] = useState<
    {
      CartoonName: string;
      elements: {
      CartoonType: string;
      Options: { option: string; value: string }[]};
    }[]
  >([
    {
      CartoonName: "",
     elements: {
      CartoonType: "Dropdown",
      Options: [{ option: "Full Body", value: "" }, { option: "Shoulder up", value: "" }]},
    },
  ]);

  // const addElementHandler = (i: number) => {
  //   let addElement = [...addCartoon];
  //   addElement[i]["CartoonType"] =  [...addElement[i], {CartoonType: ""}];
  //   setAddCartoon(addElement);
  const addElementHandler = () => {
    setAddCartoon([
      ...addCartoon,
      {
        CartoonName: "",
        elements: {
        CartoonType: "",
        Options: []},
      },
    ]);
  };

  const addOptionHandler = (i: number) => {
    console.log(i);
    let addNewOption = [...addCartoon];
    addNewOption[i]["elements"]["Options"] = [
      ...addCartoon[i]["elements"]["Options"],
      { option: "", value: "" },
    ];
    setAddCartoon(addNewOption);
    console.log(addNewOption);
  };

  const addVendorHandler = () => {
    setAddCartoon([
      ...addCartoon,
      {
        CartoonName: "",
        elements : {
        CartoonType: "",
        Options: [{ option: "", value: "" }]},
      },
    ]);
  };

  const handleChange = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let addNewCartoon = [...addCartoon];
    addNewCartoon[i]["CartoonName"] = e.target.value;
    setAddCartoon(addNewCartoon);
  };

  const dropdownHandler = (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let addDropdown = [...addCartoon];
    addDropdown[i]["elements"]["CartoonType"] = e.target.value;
    setAddCartoon(addDropdown);
  };

  const optionHandler = (
    i: number,
    j: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addCartoon];
    newAddOptions[i]["elements"]["Options"][j]["option"] = e.target.value;
    setAddCartoon(newAddOptions);
  };
  const valueHandler = (
    i: number,
    j: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addCartoon];
    newAddOptions[i]["elements"]["Options"][j]["value"] = e.target.value;
    setAddCartoon(newAddOptions);
  };

  const submitHandler = () => {
    console.log(addCartoon);
  };

  return (
    <>
      <VendorHeader
        addElementHandler={addElementHandler} addCartoon={[]} addOptionHandler={function (i: number): void {
          throw new Error("Function not implemented.");
        } } addVendorHandler={function (): void {
          throw new Error("Function not implemented.");
        } } handleChange={function (i: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
          throw new Error("Function not implemented.");
        } } dropdownHandler={function (i: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
          throw new Error("Function not implemented.");
        } } optionHandler={function (i: number, j: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
          throw new Error("Function not implemented.");
        } } valueHandler={function (i: number, j: number, e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
          throw new Error("Function not implemented.");
        } }        // addCartoon={addCartoon}
        // addOptionHandler={addOptionHandler}
        // addVendorHandler={addVendorHandler}
        // handleChange={handleChange}
        // dropdownHandler={dropdownHandler}
        // optionHandler={optionHandler}
        // valueHandler={valueHandler}
      />

      <Typography marginTop="30px" marginLeft="20px">
        <Button
          variant="contained"
          type="submit"
          onClick={submitHandler}
          style={{ padding: "10px 40px" }}
        >
          SUBMIT
        </Button>
      </Typography>
    </>
  );
}
