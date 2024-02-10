const Maps = () => {
  return (
    <div className="left flex flex-row justify-between min-h-screen bg-slate-300">
      <div className="flex-1 p-3 overflow-scroll">
        <iframe
          className="w-full h-full"
          frameborder="0"
          scrollbar="no"
          src="https://maplibre-ondc.onrender.com/fly_to_point.html"
        ></iframe>
      </div>
      <div className="flex flex-1 justify-center p-3 flex-col">
        <span className="font-bold">ONDC</span>
        <span>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquam
          earum suscipit sapiente, voluptatem pariatur voluptates rem modi!
          Optio laborum inventore fugiat, vel quaerat repellat sunt molestiae
          ipsa natus, adipisci minus libero officiis? Dolore, esse? Quisquam
          molestias doloremque cum accusamus, labore eaque dolorum voluptas.
          Cupiditate sit minima repudiandae quis perspiciatis accusamus
          reiciendis cumque placeat corporis. Tempora omnis ipsam est fugit illo
          consectetur eveniet, sapiente aperiam amet qui delectus nesciunt
          eaque. At voluptatem modi ea fugiat accusamus nulla blanditiis
          quisquam mollitia facilis accusantium amet iste asperiores libero esse
          quaerat tempore reprehenderit a est doloribus perferendis corrupti,
          earum commodi. Omnis animi architecto qui.
        </span>
      </div>
    </div>
  );
};

export default Maps;
