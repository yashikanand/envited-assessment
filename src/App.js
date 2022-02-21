import "./App.css";
import Header from "./Components/homeComponents/header";
import Body from "./Components/homeComponents/body";
import CoverPhoto from "./Components/homeComponents/coverphoto";
import Event from "./Components/event";

function App() {
  return (
    <div>
      <Header />
      <Body />
      <CoverPhoto />
      <Event />
    </div>
  );
}

export default App;
