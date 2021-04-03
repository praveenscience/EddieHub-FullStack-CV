import MainArea from "./MainArea/MainArea";
import MainDetails from "./MainDetails/MainDetails";

const App = () => {
  document.title = "My Name - Curriculum Vitae";
  return (
    <>
      <MainDetails />
      <MainArea />
    </>
  );
};

export default App;
