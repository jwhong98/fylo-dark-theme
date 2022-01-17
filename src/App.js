import "./App.css";
import Body from "./components/Body";
import Description from "./components/Description";
import Header from "./components/Header";
import Info from "./components/Info";
import Productive from "./components/Productive";

function App() {
  return (
    <>
      <Header />
      <Body>
        <Description />
        <Info />
        <Productive />
      </Body>
    </>
  );
}

export default App;
