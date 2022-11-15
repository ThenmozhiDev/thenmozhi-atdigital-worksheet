import { Box, Button, Grid, Typography } from "@mui/material";
import CartoonDropdown from "./CartoonDropdown";
import CartoonText from "./CartoonText";
import { ChangeEvent, SetStateAction, useState } from "react";
import CartoonHeader from "./CartoonHeader";
import CartoonElement from "./CartoonElement";
import { componentProps } from "./CartoonMainComponent";

interface defaultProps {
  handleChange: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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
