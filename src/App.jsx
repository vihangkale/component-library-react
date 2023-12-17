import "./App.css";
import Accordian from "./components/Accordian";
import Carousal from "./components/Carousal";
import StarRating from "./components/starRating";
import Tabs from "./components/tabs";

function App() {
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <StarRating />
      <h2>Tabs</h2>
      <Tabs />
      <h2>Accordian </h2>
      <Accordian />
      <h2>Carousal </h2>
      <Carousal />
    </div>
  );
}

export default App;
