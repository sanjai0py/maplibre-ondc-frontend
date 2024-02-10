const Card = ({ imgLink, altTxt, numberOfNodes }) => {
  return (
    <div className="bg-transparent w-44">
      <div>
        <img className="h-1/2 rounded-md" src={imgLink} alt={altTxt} />
      </div>
      <div className="text-center mt-2">
        <span className="font-bold text-lg">News</span>
        <p className="text-xs">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur,
          suscipit.
        </p>
      </div>

      <div className="absolute bottom-[210px] left-[170px] p-5 w-10 h-10 bg-[#1DA1F2] rounded-full flex justify-center align-middle">
        <span className="relative bottom-[15px] text-2xl font-bold text-center text-[#ffffff]">{numberOfNodes}</span>
      </div>
    </div>
  );
};

export default Card;
