import { useState } from "react";
import { sculptureList } from "./data";
import { FaCircleChevronRight, FaCircleChevronLeft } from "react-icons/fa6";

const Project1 = () => {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  const sculpture = sculptureList[index];
  const hasNext = index < sculptureList.length - 1;

  const nextButtonHandler = () => {
    if (hasNext) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };

  const previousButtonHandler = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };
  const toggleHandler = () => {
    setShowMore(!showMore);
  };
  return (
    <>
      <h1 className="text-center text-2xl mt-2">simple slider...</h1>
      <div
        className="border-2 border-red-950 text-center 
      flex items-center justify-center flex-col gap-4 mt-2"
      >
        <div className="flex gap-8 mt-3 cursor-pointer">
          <FaCircleChevronLeft
            className="w-6 h-6"
            onClick={previousButtonHandler}
          />
          <FaCircleChevronRight
            className="w-6 h-6"
            onClick={nextButtonHandler}
          />
        </div>
        <span>
          ({index + 1} of {sculptureList.length})
        </span>

        <h2 className="font-thin text-2xl">Art Name: {sculpture.name}</h2>

        <img src={sculpture.url} alt={sculpture.name} />
        <h2>
          Artist Name:- <i>{sculpture.artist}</i>
        </h2>
        <button
          onClick={toggleHandler}
          className="border-2 border-black mb-3 p-2 rounded-lg"
        >
          {showMore ? "hide" : "show"} details
        </button>
        {showMore && <p>{sculpture.description}</p>}
      </div>
    </>
  );
};
export default Project1;
