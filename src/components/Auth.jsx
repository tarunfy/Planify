import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

export default function BasicModal() {
  const {
    login,
    signup,
    open,
    handleClose,
    modalType,
    email,
    password,
    confirmPassword,
    setEmail,
    setConfirmPassword,
    setPassword,
  } = useContext(AuthContext);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form
            className="flex flex-col items-start  space-y-5"
            onSubmit={modalType === "signup" ? signup : login}
          >
            <div className="flex flex-col space-y-1 w-full">
              <label
                htmlFor="email"
                className="text-lg font-Helvetica-Now-Light"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="jhondoe@gmail.com"
                className="focus:outline-none border p-3 placeholder:text-base font-Helvetica-Now-Light bg-slate-50 "
              />
            </div>
            <div className="flex flex-col space-y-1 w-full">
              <label
                htmlFor="password"
                className="text-lg font-Helvetica-Now-Light"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="5+ characters"
                className="focus:outline-none border bg-slate-50 p-3 placeholder:text-base font-Helvetica-Now-Light"
              />
            </div>
            {modalType === "signup" && (
              <div className="flex flex-col space-y-1 w-full">
                <label
                  htmlFor="confirm-password"
                  className="text-lg font-Helvetica-Now-Light"
                >
                  Confirm password
                </label>
                <input
                  type="password"
                  id="confirm-password"
                  required
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="focus:outline-none border bg-slate-50 p-3 placeholder:text-base font-Helvetica-Now-Light"
                />
              </div>
            )}
            <button
              type="submit"
              className="capitalize px-4 py-2 bg-primary-500 text-white w-full text-lg font-Helvetica-Now-Regular"
            >
              {modalType}
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
