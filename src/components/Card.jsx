import { Button, Modal } from "flowbite-react";
import { useState } from "react";

const Card = ({ imgLink, altTxt, numberOfNodes, title, desc, frameLink }) => {
  const [openModal, setOpenModal] = useState(false);
  console.log(frameLink);
  console.log(altTxt);
  console.log(numberOfNodes);

  return (
    <div className="bg-transparent w-52 relative">
      <div>
        <img className="h-1/2 rounded-md" src={imgLink} alt={altTxt} />
      </div>
      <div className="text-center mt-1">
        <span className="font-bold text-lg">{title}</span>
        <p className="text-xs ">{desc}</p>

        <button
          className="p-1 mt-3 text-white rounded-md bg-slate-600"
          onClick={() => setOpenModal(true)}
        >
          View more
        </button>
      </div>

      <Modal size={"7xl"} className="h-full" show={openModal} onClose={() => setOpenModal(false)}>
        <Modal.Header>{title}</Modal.Header>
        <Modal.Body>
          <div className="space-y-6" style={{height:"100vh"}}>
            <iframe
              className="w-full h-full"
              width={"100vh"}
              src={frameLink}
              frameborder="0"
            ></iframe>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              {desc}
            </p>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={() => setOpenModal(false)}>I accept</Button>
          <Button color="gray" onClick={() => setOpenModal(false)}>
            Decline
          </Button>
        </Modal.Footer>
      </Modal>

      <div className="absolute bottom-[95%] left-[12rem] p-5 w-10 h-10 bg-[#1DA1F2] rounded-full flex justify-center align-middle">
        <span className="relative bottom-[15px] text-2xl font-bold text-center text-[#ffffff]">
          {numberOfNodes}
        </span>
      </div>
    </div>

    // <>
    //   <Modal show={openModal} onClose={() => setOpenModal(false)}>
    //     <Modal.Header>Terms of Service</Modal.Header>
    //     <Modal.Body>
    //       <div className="space-y-6">
    //         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //           With less than a month to go before the European Union enacts new
    //           consumer privacy laws for its citizens, companies around the world
    //           are updating their terms of service agreements to comply.
    //         </p>
    //         <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
    //           The European Union’s General Data Protection Regulation (G.D.P.R.)
    //           goes into effect on May 25 and is meant to ensure a common set of
    //           data rights in the European Union. It requires organizations to
    //           notify users as soon as possible of high-risk data breaches that
    //           could personally affect them.
    //         </p>
    //       </div>
    //     </Modal.Body>
    //     <Modal.Footer>
    //       <Button onClick={() => setOpenModal(false)}>I accept</Button>
    //       <Button color="gray" onClick={() => setOpenModal(false)}>
    //         Decline
    //       </Button>
    //     </Modal.Footer>
    //   </Modal>
    // </>
  );
};

export default Card;
