import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const Card = ({
  imgLink,
  altTxt,
  numberOfNodes,
  title,
  desc,
  frameLink,
  newTab,
}) => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <div className="bg-transparent w-52 relative">
      <div>
        <img className="h-1/2 rounded-md" src={imgLink} alt={altTxt} />
      </div>
      <div className="text-center mt-1">
        <span className="font-bold text-lg">{title}</span>
        <p className="text-xs">{desc}</p>

        {
          <a
            href={frameLink}
            target="_blank"
            rel="noreferrer"
            className="p-1 text-white rounded-md bg-slate-600"
          >
            View more
          </a>
        }
      </div>

      {/* <Modals
        size={"7xl"}
        className="h-full"
        show={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6 flex" style={{ height: "75vh" }}>
            <iframe
              className="w-full h-full"
              src={frameLink}
              frameborder="0"
            ></iframe>
            <div className="m-5">
              <h3 className="text-2xl mb-5">{title}</h3>
              <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                {desc}
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modals> */}

      <div className="absolute bottom-[95%] left-[12rem] p-5 w-10 h-10 bg-[#1DA1F2] rounded-full flex justify-center align-middle">
        <span className="relative bottom-[15px] text-2xl font-bold text-center text-[#ffffff]">
          {numberOfNodes}
        </span>
      </div>
    </div>
  );
};

export default Card;
