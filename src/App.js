import "./App.css";
import DarkMode from "./Components/DarkMode";
import Grid from "./Components/Grid";
import Index from "./Components/Index";
import ToggleButton from "./Components/Toggle";

function App() {
  return (
    <div className="App">
      <Index />
      <DarkMode />
      <ToggleButton />
      <Grid />
    </div>
  );
}

export default App;
