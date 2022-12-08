import { Box } from "@mui/material";
import CartoonHeader from "../CartoonHeader";
import AddElement from "./AddElement";
import { fieldProps } from "./MainComponent";

interface propsData {
  addVendorHandler: () => void;
  addVendor: fieldProps[];
  addElementHandler: (i: number) => void;
  addOptionHandler: (i: number, j: number) => void;
}

export default function HeaderComponent({
  addVendorHandler,
  addVendor,
  addElementHandler,
  addOptionHandler,
}: propsData) {
  return (
    <>
      <CartoonHeader onChange={addVendorHandler} />
      {addVendor.map((element, index) => (
        <AddElement
          onChange={() => addElementHandler(index)}
          addElement={addVendor[index]["elements"]}
          addOptionHandler={addOptionHandler}
        />
      ))}
    </>
  );
}
