import "./App.css";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <LandingPage></LandingPage>
      <Gallery></Gallery>
      <Team></Team>
    </div>
  );
}

export default App;
