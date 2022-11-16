import { ChangeEvent, ChangeEventHandler } from "react";
import CartoonHeader from "./CartoonHeader";
import CartoonElement from "./CartoonElement";
import { componentProps } from "./CartoonMainComponent";
import { SelectChangeEvent } from "@mui/material";

interface defaultProps {
  handleChange: (
    i: number,
    e:  ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent<string> 
  ) => void;
  addVendorHandler: () => void;
  addVendors: componentProps[];
}

export default function CartoonDetails({
  handleChange,
  addVendorHandler,
  addVendors,
}: defaultProps) {
  return (
    <>
      <CartoonHeader onChange={addVendorHandler} />
      {addVendors.map((element, index) => (
        <CartoonElement
          handleChange={(e) => handleChange(index, e)}
          element={element}
          key={index}
        />
      ))}
    </>
  );
}
