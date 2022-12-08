import { ChangeEvent } from "react";
import CartoonHeader from "../CartoonHeader";
import VendorElement from "./VendorElement";

interface headerProps {
  addElementHandler: (i: number) => void;
  addCartoon: {
    CartoonName: string;
    CartoonType: string;
    Options: { option: string; value: string }[];
  }[];
  addOptionHandler: (i: number) => void;
  addVendorHandler: () => void;
  handleChange: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  dropdownHandler: (
    i: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  optionHandler: (
    i: number,
    j: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  valueHandler: (
    i: number,
    j: number,
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

export default function VendorHeader({
  addVendorHandler,
  addElementHandler,
  addCartoon,
  addOptionHandler,
  handleChange,
  dropdownHandler,
  optionHandler,
  valueHandler,
}: headerProps) {
  return (
    <>
      <CartoonHeader onChange={() => addVendorHandler()} />
      {addCartoon.map((element, index) => (
        <VendorElement
              addCartoon={addCartoon}
              addElementHandler={addElementHandler}
              addOptionHandler={addOptionHandler}
              onChange={(e) => handleChange(index, e)}
              dropdownHandler={(e) => dropdownHandler(index, e)}
              optionHandler={(i, e) => optionHandler(index, i, e)}
              valueHandler={(i, e) => valueHandler(index, i, e)} addVendor={{
                  CartoonName: "",
                  CartoonType: "",
                  Options: []
              }}     
              index={index}    
        />
      ))}
    </>
  );
}
