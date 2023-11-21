import "./App.css";
import StarRating from "./components/starRating";
import Tabs from "./components/tabs";

function App() {
  return (
    <div className="App">
      <h1>Star Rating</h1>
      <StarRating />
      <h2>Tabs</h2>
      <Tabs />
    </div>
  );
}

export default App;
