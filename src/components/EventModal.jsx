import { useState } from "react";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import TimePicker from "./TimePicker";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  height: "650px",
};

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [isAvailableSun, setIsAvailableSun] = useState(false);
  const [isAvailableMon, setIsAvailableMon] = useState(false);
  const [isAvailableTue, setIsAvailableTue] = useState(true);
  const [isAvailableWed, setIsAvailableWed] = useState(false);
  const [isAvailableThu, setIsAvailableThu] = useState(true);
  const [isAvailableFri, setIsAvailableFri] = useState(false);
  const [isAvailableSat, setIsAvailableSat] = useState(true);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex items-center bg-primary-500 px-4 py-2 text-white hover:shadow-md transition font-Helvetica-Now-Regular"
      >
        Create <AddIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="!overflow-y-scroll focus:!outline-none">
          <div className="mb-10">
            <h1 className="text-xl font-Helvetica-Now-Regular text-center">
              One-on-One Event
            </h1>
            <p className="text-center text-lg font-Helvetica-Now-Light">
              Let an invitee pick a time to meet with you.
            </p>
          </div>

          <form className="space-y-5">
            <div className="flex flex-col items-start space-y-1 w-full">
              <label
                htmlFor="event-name"
                className="font-Helvetica-Now-Regular"
              >
                Event name
              </label>
              <input
                type="text"
                required
                autoComplete="off"
                id="event-name"
                className="focus:outline-none border p-3 placeholder:text-base font-Helvetica-Now-Light bg-slate-50 w-full"
              />
            </div>
            <div className="flex flex-col items-start space-y-1 w-full">
              <label
                htmlFor="event-desc"
                className="font-Helvetica-Now-Regular"
              >
                Description
              </label>
              <textarea
                name="event-desc"
                id="event-desc"
                placeholder="Write a summary and any details your invitee should know about the event."
                className="focus:outline-none border p-3 placeholder:text-base font-Helvetica-Now-Light bg-slate-50 w-full"
                cols="2"
                rows="4"
              ></textarea>
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="event-duration"
                className="font-Helvetica-Now-Regular"
              >
                Duration
              </label>
              <div className="flex space-x-4 items-center justify-start">
                <div className="flex items-center space-x-2">
                  <input type="radio" name="event-duration" id="30-mins" />
                  <label htmlFor="30-mins" className="font-Helvetica-Now-Light">
                    30 mins
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input type="radio" name="event-duration" id="1-hour" />
                  <label htmlFor="1-hour" className="font-Helvetica-Now-Light">
                    1 hr
                  </label>
                </div>
              </div>
            </div>
            <div className="flex flex-col space-y-2">
              <label
                htmlFor="event-availability"
                className="font-Helvetica-Now-Regular mb-4"
              >
                How do you want to offer your availability for this event type?
              </label>
              <ul className="space-y-2 flex flex-col items-start">
                <li className="flex space-x-6 items-center justify-between">
                  <div className="flex items-center space-x-2 justify-start">
                    <input
                      type="checkbox"
                      name="day"
                      id="sun"
                      onChange={(e) => setIsAvailableSun(e.target.checked)}
                    />
                    <label
                      htmlFor="sun"
                      className="font-Helvetica-Now-Bold text-xs w-10"
                    >
                      SUN
                    </label>
                  </div>
                  {isAvailableSun ? (
                    <TimePicker />
                  ) : (
                    <p className="text-sm font-Helvetica-Now-Light">
                      Unavailable
                    </p>
                  )}
                </li>
                <li className="flex space-x-6 items-center justify-between">
                  <div className="flex items-center space-x-2 justify-start">
                    <input
                      type="checkbox"
                      name="day"
                      id="mon"
                      onChange={(e) => setIsAvailableMon(e.target.checked)}
                    />
                    <label
                      htmlFor="mon"
                      className="font-Helvetica-Now-Bold text-xs w-10"
                    >
                      MON
                    </label>
                  </div>
                  {isAvailableMon ? (
                    <TimePicker />
                  ) : (
                    <p className="text-sm font-Helvetica-Now-Light">
                      Unavailable
                    </p>
                  )}
                </li>
                <li className="flex space-x-6 items-center justify-between">
                  <div className="flex items-center space-x-2 justify-start">
                    <input
                      type="checkbox"
                      name="day"
                      id="tue"
                      checked={isAvailableTue}
                      onChange={(e) => setIsAvailableTue(e.target.checked)}
                    />
                    <label
                      htmlFor="tue"
                      className="font-Helvetica-Now-Bold text-xs w-10"
                    >
                      TUE
                    </label>
                  </div>
                  {isAvailableTue ? (
                    <TimePicker />
                  ) : (
                    <p className="text-sm font-Helvetica-Now-Light">
                      Unavailable
                    </p>
                  )}
                </li>
                <li className="flex space-x-6 items-center justify-between">
                  <div className="flex items-center space-x-2 justify-start">
                    <input
                      type="checkbox"
                      name="day"
                      id="wed"
                      onChange={(e) => setIsAvailableWed(e.target.checked)}
                    />
                    <label
                      htmlFor="wed"
                      className="font-Helvetica-Now-Bold text-xs w-10"
                    >
                      WED
                    </label>
                  </div>
                  {isAvailableWed ? (
                    <TimePicker />
                  ) : (
                    <p className="text-sm font-Helvetica-Now-Light">
                      Unavailable
                    </p>
                  )}
                </li>
                <li className="flex space-x-6 items-center justify-between">
                  <div className="flex items-center space-x-2 justify-start">
                    <input
                      type="checkbox"
                      name="day"
                      id="thu"
                      checked={isAvailableThu}
                      onChange={(e) => setIsAvailableThu(e.target.checked)}
                    />
                    <label
                      htmlFor="thu"
                      className="font-Helvetica-Now-Bold text-xs w-10"
                    >
                      THU
                    </label>
                  </div>
                  {isAvailableThu ? (
                    <TimePicker />
                  ) : (
                    <p className="text-sm font-Helvetica-Now-Light">
                      Unavailable
                    </p>
                  )}
                </li>
                <li className="flex space-x-6 items-center justify-between">
                  <div className="flex items-center space-x-2 justify-start">
                    <input
                      type="checkbox"
                      name="day"
                      id="fri"
                      onChange={(e) => setIsAvailableFri(e.target.checked)}
                    />
                    <label
                      htmlFor="fri"
                      className="font-Helvetica-Now-Bold text-xs w-10"
                    >
                      FRI
                    </label>
                  </div>
                  {isAvailableFri ? (
                    <TimePicker />
                  ) : (
                    <p className="text-sm font-Helvetica-Now-Light">
                      Unavailable
                    </p>
                  )}
                </li>
                <li className="flex space-x-6 items-center justify-between">
                  <div className="flex items-center space-x-2 justify-start">
                    <input
                      type="checkbox"
                      name="day"
                      id="sat"
                      checked={isAvailableSat}
                      onChange={(e) => setIsAvailableSat(e.target.checked)}
                    />
                    <label
                      htmlFor="sat"
                      className="font-Helvetica-Now-Bold text-xs w-10"
                    >
                      SAT
                    </label>
                  </div>
                  {isAvailableSat ? (
                    <TimePicker />
                  ) : (
                    <p className="text-sm font-Helvetica-Now-Light">
                      Unavailable
                    </p>
                  )}
                </li>
              </ul>
            </div>
            <div className="w-full flex justify-end">
              <button
                onClick={handleClose}
                className="bg-primary-500 text-lg font-Helvetica-Now-Regular px-4 py-2 text-white"
              >
                Submit
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
