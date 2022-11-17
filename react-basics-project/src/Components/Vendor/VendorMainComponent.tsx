import { Button, SelectChangeEvent, Typography } from "@mui/material";
import { ChangeEvent, useState } from "react";
import CartoonHeader from "../CartoonHeader";

import VendorElement from "./VendorElement";
import VendorHeader from "./VendorHeader";

export default function VendorMainComponent() {
  const [addCartoon, setAddCartoon] = useState<
    {
      CartoonName: string;
      CartoonType: string;
      Options: { option: string; value: string }[];
    }[]
  >([
    {
      CartoonName: "",
      CartoonType: "Dropdown",
      Options: [{ option: "Full Body", value: "" }, { option: "Shoulder up", value: "" }],
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
        CartoonType: "",
        Options: [],
      },
    ]);
  };

  const addOptionHandler = (i: number) => {
    console.log(i);
    let addNewOption = [...addCartoon];
    addNewOption[i]["Options"] = [
      ...addCartoon[i]["Options"],
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
        CartoonType: "",
        Options: [{ option: "", value: "" }],
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
    addDropdown[i]["CartoonType"] = e.target.value;
    setAddCartoon(addDropdown);
  };

  const optionHandler = (
    i: number,
    j: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addCartoon];
    newAddOptions[i]["Options"][j]["option"] = e.target.value;
    setAddCartoon(newAddOptions);
  };
  const valueHandler = (
    i: number,
    j: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    let newAddOptions = [...addCartoon];
    newAddOptions[i]["Options"][j]["value"] = e.target.value;
    setAddCartoon(newAddOptions);
  };

  const submitHandler = () => {
    console.log(addCartoon);
  };

  return (
    <>
      <VendorHeader
        addElementHandler={addElementHandler}
        addCartoon={addCartoon}
        addOptionHandler={addOptionHandler}
        addVendorHandler={addVendorHandler}
        handleChange={handleChange}
        dropdownHandler={dropdownHandler}
        optionHandler={optionHandler}
        valueHandler={valueHandler}
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
