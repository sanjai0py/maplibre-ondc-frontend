const Card = ({ imgLink, altTxt }) => {
  return (
    <div className="bg-gray-400 p-4 rounded-lg shadow-md mb-4">
      <div>
        <img className="h-60 w-50" src={imgLink} alt={altTxt} />
      </div>
      <div>
        <h1>News</h1>
        <p>Here is some news</p>
      </div>
    </div>
  );
};

export default Card;
