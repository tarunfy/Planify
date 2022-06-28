import { useState } from "react";
import nProgress, { set } from "nprogress";
import Box from "@mui/material/Box";
import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import DayContainer from "./DayContainer";

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

const days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];

export default function BasicModal() {
  const [open, setOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [daysData, setDaysData] = useState({});
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDuration, setEventDuration] = useState("");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    nProgress.start();

    const data = {
      name: eventName,
      description: eventDescription,
      duration: eventDuration,
      daysData,
    };

    console.log(data);

    setTimeout(() => {
      setOpen(false);
      setIsLoading(false);
      setEventDescription("");
      setEventDuration("");
      setEventName("");
      setDaysData({});
      nProgress.done();
    }, 3000);
  };

  return (
    <div>
      <button
        onClick={handleOpen}
        className="flex items-center bg-primary-500 px-4 py-2 text-white hover:shadow-md focus:outline-none transition font-Helvetica-Now-Regular"
      >
        Create <AddIcon />
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        className={`${isLoading && "pointer-events-none"}`}
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

          <form className="space-y-5" onSubmit={handleSubmit}>
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
                value={eventName}
                onChange={(e) => setEventName(e.target.value)}
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
                value={eventDescription}
                onChange={(e) => setEventDescription(e.target.value)}
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
                  <input
                    type="radio"
                    onChange={(e) => setEventDuration(e.target.id)}
                    name="event-duration"
                    id="30-mins"
                  />
                  <label htmlFor="30-mins" className="font-Helvetica-Now-Light">
                    30 mins
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <input
                    type="radio"
                    onChange={(e) => setEventDuration(e.target.id)}
                    name="event-duration"
                    id="1-hour"
                  />
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
                {days.map((day, index) => (
                  <DayContainer
                    key={index}
                    dayName={day}
                    setDaysData={setDaysData}
                  />
                ))}
              </ul>
            </div>
            <div className="w-full flex justify-end">
              <button
                disabled={isLoading}
                type="submit"
                className="bg-primary-500 disabled:cursor-not-allowed disabled:bg-primary-500/50 disabled:text-white/50 text-lg font-Helvetica-Now-Regular px-4 py-2 text-white focus:outline-none"
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
