import Diagram, { createSchema, useSchema } from "beautiful-react-diagrams";

import "beautiful-react-diagrams/styles.css";
import Card from "./Card";

// the diagram model
const initialSchema = createSchema({
  nodes: [
    {
      id: "node-1",
      content: (
        <Card
          imgLink={"https://http.cat/images/401.jpg"}
          altTxt={"some alt text"}
        />
      ),
      coordinates: [100, 50],
    },
    {
      id: "node-2",
      content: <Card imgLink={"https://http.cat/images/405.jpg"} />,
      coordinates: [550, 50],
    },
    {
      id: "node-3",
      content: <Card imgLink={"https://http.cat/images/407.jpg"} />,
      coordinates: [1000, 50],
    },
    {
      id: "node-4",
      content: <Card imgLink={"https://http.cat/images/101.jpg"} />,
      coordinates: [1000, 450],
    },
    {
      id: "node-5",
      content: <Card imgLink={"https://http.cat/images/418.jpg"} />,
      coordinates: [550, 450],
    },
    {
      id: "node-6",
      content: <Card imgLink={"https://http.cat/images/420.jpg"} />,
      coordinates: [100, 450],
    },
  ],
  links: [
    { input: "node-1", output: "node-2" },
    { input: "node-2", output: "node-3" },
    { input: "node-3", output: "node-4" },
    { input: "node-4", output: "node-5" },
    { input: "node-5", output: "node-6" },
  ],
});

const UncontrolledDiagram = () => {
  // create diagrams schema
  const [schema, { onChange }] = useSchema(initialSchema);

  return (
    <div className="h-screen">
      <Diagram schema={schema} onChange={onChange} />
    </div>
  );
};

export default UncontrolledDiagram;
