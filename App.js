import { StatusBar } from "expo-status-bar";
import Navigation from "./components/Navigation";

const App = () => {
  return (
    <>
      <Navigation />
      <StatusBar style="dark" />
    </>
  );
};

export default App;
