const Card = ({ imgLink, altTxt, numberOfNodes, title, desc }) => {
  return (
    <div className="bg-transparent w-52 relative">
      <div>
        <img className="h-1/2 rounded-md" src={imgLink} alt={altTxt} />
      </div>
      <div className="text-center mt-1">
        <span className="font-bold text-lg">{title}</span>
        <p className="text-xs ">{desc}</p>
      </div>

      <div
        className="absolute bottom-[95%] left-[12rem] p-5 w-10 h-10 bg-[#1DA1F2] rounded-full flex justify-center align-middle"
      >
        <span className="relative bottom-[15px] text-2xl font-bold text-center text-[#ffffff]">
          {numberOfNodes}
        </span>
      </div>
    </div>
  );
};

export default Card;
