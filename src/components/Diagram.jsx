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
          frameLink={"https://maplibre-ondc.onrender.com/motorable_path.html"}
          numberOfNodes="1"
          altTxt={"some alt text"}
          title={"Motorable Path Planning"}
          desc={
            "Efficiently discover the best road route and measure distances using the Haversine formula."
          }
          bottom="200px"
          left="400px"
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
          frameLink={"https://maplibre-ondc.onrender.com/motorable_path.html"}
          numberOfNodes="2"
          altTxt={"some alt text"}
          title={"Haversine Distance"}
          desc={
            "Discover the direct path between two points, ensuring accurate spatial measurements"
          }
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
          frameLink={"https://maplibre-ondc.onrender.com/polygon_mapping.html"}
          altTxt={"some alt text"}
          numberOfNodes="3"
          title={"Polygon Mapping"}
          desc={
            "Efficiently map polygons and calculate areas for diverse spatial applications."
          }
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
          frameLink={"https://maplibre-ondc.onrender.com/fly_to_point.html"}
          title={"Uber H3 Mapping"}
          desc={
            "Harness Uber's H3 for efficient hexagonal polygon mapping and analysis."
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
          frameLink={"https://maplibre-ondc.onrender.com/geocode.html"}
          numberOfNodes="5"
          title={"Geocoding Solutions"}
          desc={
            "Swiftly convert addresses to precise coordinates for seamless location integration."
          }
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
          frameLink={"https://maplibre-ondc.onrender.com/reverse_geocode.html"}
          title={"Reverse Geocoding"}
          desc={
            "Decode coordinates to addresses seamlessly for enhanced location precision"
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
          title={"Find Services"}
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore"
          }
          altTxt={"some alt text"}
          frameLink={"https://maplibre-ondc.onrender.com/find_services.html"}
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
          title={"Finde Services example"} 
          desc={
            "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore"
          }
          altTxt={"some alt text"}
          frameLink={"https://maplibre-ondc.onrender.com/find_places.html"}
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
