import "./App.css";
import Header from "./components/Header/Header";
import Carosuel from "./components/Carosuel/Carosuel";
import arohi1 from "./assets/arohi1.jpg"; // Path relative to the component file

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Carosuel></Carosuel>
    </div>
  );
}

export default App;
