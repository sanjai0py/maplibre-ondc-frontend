import Card from "./components/Card";
import UncontrolledDiagram from "./components/Diagram";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Maps />
      <UncontrolledDiagram />
    </div>
  );
}

export default App;
