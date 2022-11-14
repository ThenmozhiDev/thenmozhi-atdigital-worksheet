import { Route, Routes } from "react-router-dom";
import CartoonMainComponent from "./Components/CartoonMainComponent";
import MainOptionCard from "./Components/MainOptionCard";
import VendorMainComponent from "./Components/Vendor/VendorMainComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainOptionCard />} />
        <Route path="/cartoon-Details" element={<CartoonMainComponent />} />
        <Route path="/vendor-Details" element={<VendorMainComponent />} />
      </Routes>
    </>
  );
}
export default App;
