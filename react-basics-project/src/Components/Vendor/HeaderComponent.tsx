import CartoonHeader from "../CartoonHeader";
import AddElement from "./AddElement";
import { elementProps, fieldProps } from "./MainComponent";

interface propsData {
    addVendorHandler: (i: number) => void;
    addVendor: fieldProps[];
}

export default function HeaderComponent({addVendorHandler, addVendor}: propsData) {
  return (
    <>
      <CartoonHeader />
      {addVendor.map((element, index) => (
      <AddElement />
      ))}
    </>
  );
}


