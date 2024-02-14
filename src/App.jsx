import Card from "./components/Card";
import UncontrolledDiagram from "./components/Diagram";
import Maps from "./components/Maps";
import Navbar from "./components/Navbar";
import Pricing from "./components/Pricing";

function App() {
  return (
    <div className="font-mono">
      <Navbar />
      <Maps />
      <UncontrolledDiagram id="section1" title="Section 1" />
      <Pricing id="section2" />
    </div>
  );
}

export default App;
