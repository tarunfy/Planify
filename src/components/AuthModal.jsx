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
  px: 4,
  py: 3,
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
    isLoading,
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
            className="flex relative flex-col items-start  space-y-5"
            onSubmit={
              modalType === "signup"
                ? (e) => signup(e, email, password)
                : (e) => login(e, email, password)
            }
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
            <div className="w-full space-y-2">
              <button
                disabled={isLoading}
                type="submit"
                className="px-4 py-2 bg-primary-500 text-white w-full text-lg font-Helvetica-Now-Regular disabled:bg-primary-500/50 disabled:text-white/50"
              >
                {modalType === "signup" ? "Sign up" : "Login"}
              </button>
              <button
                disabled={isLoading}
                onClick={handleClose}
                className="capitalize px-4 py-2 bg-secondary-500 text-white w-full text-lg font-Helvetica-Now-Regular disabled:bg-secondary-500/50 disabled:text-white/50"
              >
                Cancel
              </button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
