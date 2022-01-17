import "./App.css";
import Body from "./components/Body";
import Description from "./components/Description";
import Header from "./components/Header";
import Info from "./components/Info";

function App() {
  return (
    <>
      <Header />
      <Body>
        <Description />
        <Info />
      </Body>
    </>
  );
}

export default App;
