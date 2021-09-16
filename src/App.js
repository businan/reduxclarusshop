import ComputerComp from "./components/ComputerComp";
import LaptopComp from "./components/LaptopComp";
import PhoneComp from "./components/PhoneComp";
import WatchComp from "./components/WatchComp";

function App() {
  return (
    <div className="App">
      <h1>ClarusShop</h1>
      <LaptopComp />
      <PhoneComp />
      <WatchComp />
      <ComputerComp />
    </div>
  );
}

export default App;
