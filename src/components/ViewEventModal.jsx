import { useState } from "react";
import Box from "@mui/material/Box";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Modal from "@mui/material/Modal";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal({ event }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className=" border-primary-500 bg-transparent text-black hover:text-white hover:bg-primary-500 border-[1px]  text-base font-Outfit font-normal px-4 py-2 focus:outline-none flex items-center transition-colors rounded-sm duration-300 ease-in-out"
      >
        View <RemoveRedEyeIcon className="ml-1" />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="font-Outfit space-y-4 text-secondary-800">
            <h1 className="text-center text-3xl font-bold">
              {event?.eventName}
            </h1>
            <p className="text-center">{event?.description}</p>
            <div className="flex w-full items-center text-center text-secondary-400 justify-center">
              <AccessTimeIcon className="mr-2 t" />
              <p className="font-normal text-xl">{event?.duration}</p>
            </div>
            <div className="space-y-2 w-full flex justify-center">
              <div>
                {Object.keys(event.daysData).map((key, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10">
                      <h3 className="text-lg font-semibold">{key}</h3>
                    </div>
                    {event.daysData[key] !== null ? (
                      <div className="flex items-center w-52 justify-end text-right">
                        <p>{event.daysData[key].from}</p>
                        <span className="mx-4">-</span>
                        <p>{event.daysData[key].to}</p>
                      </div>
                    ) : (
                      <div className="flex items-center w-52 justify-end text-right">
                        null
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
