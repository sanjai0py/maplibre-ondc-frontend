import Diagram, {
  createSchema,
  useSchema,
} from "../../lib/beautiful-react-diagrams";

import "../../lib/beautiful-react-diagrams/styles.css";
import Card from "./Card";

// the diagram model
const initialSchema = createSchema({
  nodes: [
    {
      id: "node-1",
      content: (
        <Card
          imgLink={
            "https://cdn.britannica.com/80/149180-050-23E41CF0/topographic-map.jpg"
          }
          numberOfNodes="1"
          altTxt={"some alt text"}
        />
      ),
      coordinates: [300, 30],
    },
    {
      id: "node-2",
      content: (
        <Card
          imgLink={
            "https://cdn.britannica.com/80/149180-050-23E41CF0/topographic-map.jpg"
          }
          numberOfNodes="2"
          altTxt={"some alt text"}
        />
      ),
      coordinates: [650, 50],
    },
    {
      id: "node-3",
      content: (
        <Card
          imgLink={
            "https://cdn.britannica.com/80/149180-050-23E41CF0/topographic-map.jpg"
          }
          altTxt={"some alt text"}
          numberOfNodes="3"
        />
      ),
      coordinates: [1000, 40],
    },
    {
      id: "node-4",
      content: (
        <Card
          imgLink={
            "https://cdn.britannica.com/80/149180-050-23E41CF0/topographic-map.jpg"
          }
          altTxt={"some alt text"}
          numberOfNodes="4"
        />
      ),
      coordinates: [1300, 300],
    },
    {
      id: "node-5",
      content: (
        <Card
          imgLink={
            "https://cdn.britannica.com/80/149180-050-23E41CF0/topographic-map.jpg"
          }
          numberOfNodes="5"
          altTxt={"some alt text"}
        />
      ),
      coordinates: [950, 450],
    },
    {
      id: "node-6",
      content: (
        <Card
          imgLink={
            "https://cdn.britannica.com/80/149180-050-23E41CF0/topographic-map.jpg"
          }
          numberOfNodes="6"
          altTxt={"some alt text"}
        />
      ),
      coordinates: [580, 450],
    },
    {
      id: "node-7",
      content: (
        <Card
          imgLink={
            "https://cdn.britannica.com/80/149180-050-23E41CF0/topographic-map.jpg"
          }
          numberOfNodes="7"
          altTxt={"some alt text"}
        />
      ),
      coordinates: [250, 450],
    },
    {
      id: "node-8",
      content: (
        <Card
          imgLink={
            "https://cdn.britannica.com/80/149180-050-23E41CF0/topographic-map.jpg"
          }
          numberOfNodes="8"
          altTxt={"some alt text"}
        />
      ),
      coordinates: [30, 270],
    },
  ],
  links: [
    { input: "node-1", output: "node-2" },
    { input: "node-2", output: "node-3" },
    { input: "node-3", output: "node-4" },
    { input: "node-4", output: "node-5" },
    { input: "node-5", output: "node-6" },
    { input: "node-6", output: "node-7" },
    { input: "node-7", output: "node-8" },
    { input: "node-8", output: "node-1" },
    { input: "node-1", output: "node-6" },
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
