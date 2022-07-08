import * as React from "react";
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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
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
            <h1 className="text-center text-3xl font-bold">Event 1</h1>
            <p className="text-center">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              corrupti totam commodi nesciunt vitae libero voluptas amet at
              nulla a voluptates, repellendus ullam voluptate, saepe expedita
              deserunt laborum neque cupiditate.
            </p>
            <div className="flex w-full items-center text-center text-secondary-400 justify-center">
              <AccessTimeIcon className="mr-2 t" />
              <p className="font-normal text-xl">30 mins</p>
            </div>
            <div className="space-y-2 w-full flex justify-center">
              <div>
                <div className="flex items-center">
                  <div className="w-10">
                    <h3 className="text-lg font-semibold">Mon</h3>
                  </div>
                  <div className="flex items-center w-52 justify-end text-right">
                    <p>12:00pm</p>
                    <span className="mx-4">-</span>
                    <p>3:00pm</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="w-10">
                    <h3 className="text-lg font-semibold">Tue</h3>
                  </div>
                  <div className="flex items-center w-52 justify-end text-right">
                    <p>10:00am</p>
                    <span className="mx-4">-</span>
                    <p>2:00pm</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
