import DefaultConfig from "../constants/Config";
import UserConfig from "../constants/Config.json";
import MainArea from "./MainArea/MainArea";
import MainDetails from "./MainDetails/MainDetails";

const App = () => {
  const Config = UserConfig ? UserConfig : DefaultConfig;
  document.title = Config.MainDetails.FullName + " - Curriculum Vitae";
  return (
    <>
      <MainDetails {...Config.MainDetails} />
      <MainArea {...Config.MainArea} />
    </>
  );
};

export default App;
