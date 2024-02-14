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
      <div className="flex flex-1 justify-center p-3 flex-col gap-10">
        <span className="font-bold">ONDC</span>
        <span>
          ONDC, or Open Network for Digital Commerce, is a pioneering initiative
          by the Indian government, fostering a unified digital ecosystem.
          Empowering businesses with seamless integration, ONDC offers features
          like standardized APIs, interoperability, and a collaborative platform
          to enhance the efficiency and accessibility of digital commerce across
          diverse sectors.
        </span>
        <div className="flex flex-col flex-none w-fit text-center">
          <span className="font-bold">Project Codebase Links</span>
          <a
            href="https://github.com/sanjai0py/maplibre-ondc-frontend"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 mt-3 text-white rounded-md bg-slate-600"
          >
            Front-end
          </a>
          <a
            href="https://ondc.gov.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 mt-3 text-white rounded-md bg-slate-600"
          >
            Back-end
          </a>
        </div>
      </div>
    </div>
  );
};

export default Maps;
