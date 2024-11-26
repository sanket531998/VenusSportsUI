import "./App.css";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LandingPage></LandingPage>
      <Team></Team>
      {/* <Carosuel></Carosuel> */}
    </div>
  );
}

export default App;
