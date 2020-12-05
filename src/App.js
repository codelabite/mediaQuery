import "./App.css";
import Header from "./components/Header/Header";
import MainBody from "./components/body/body";

function App() {
  return (
    <div>
      <Header style={{ top: "0" }} />
      <MainBody />
    </div>
  );
}

export default App;
