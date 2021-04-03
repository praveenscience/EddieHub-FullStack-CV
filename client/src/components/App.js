import Config from "../constants/Config";
import MainArea from "./MainArea/MainArea";
import MainDetails from "./MainDetails/MainDetails";

const App = () => {
  document.title = Config.MainDetails.FullName + " - Curriculum Vitae";
  return (
    <>
      <MainDetails {...Config.MainDetails} />
      <MainArea />
    </>
  );
};

export default App;
