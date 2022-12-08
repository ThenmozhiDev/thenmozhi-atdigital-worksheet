import { Route, Routes } from "react-router-dom";
import CalculationPage from "./Components/Calculation/CalculationPage";
import CartoonMainComponent from "./Components/CartoonMainComponent";
import MainOptionCard from "./Components/MainOptionCard";
import MainComponent from "./Components/Vendor/MainComponent";
import VendorMainComponent from "./Components/Vendor/VendorMainComponent";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainOptionCard />} />
        <Route path="/cartoon-Details" element={<CartoonMainComponent />} />
        <Route path="/vendor-Details" element={<VendorMainComponent />} />
        <Route path="/vendor" element={<MainComponent />} />  
        <Route path="/calculator" element={<CalculationPage />} />  
      </Routes>
    </>
  );
}
export default App;
