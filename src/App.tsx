import "./App.css";
import { MainController } from "./controller/MainController";
import { Home } from "./view/components/homePage/Home";

const App = () => {
  return (
    <>
      <MainController />
      <Home />
    </>
  );
};
export default App;
