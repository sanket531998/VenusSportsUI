import "./App.css";
import Footer from "./components/Footer/Footer";
import Gallery from "./components/Gallery/Gallery";
import Header from "./components/Header/Header";
import LandingPage from "./components/LandingPage/LandingPage";
import Team from "./components/Team/Team";

function App() {
  return (
    <div>
      <Header></Header>
      <LandingPage></LandingPage>
      <Gallery></Gallery>
      <Team></Team>
      <Footer></Footer>
    </div>
  );
}

export default App;
