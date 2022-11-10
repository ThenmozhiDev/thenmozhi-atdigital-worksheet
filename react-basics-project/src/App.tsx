import { Route, Routes } from "react-router-dom";
import CartoonMainComponent from "./Components/CartoonMainComponent";
import MainOptionCard from "./Components/MainOptionCard";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainOptionCard />} />
        <Route path="/cartoon-Details" element={<CartoonMainComponent />} />
      </Routes>
    </>
  );
}
export default App;
