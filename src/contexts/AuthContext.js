import { createContext, useState } from "react";
import nProgress from "nprogress";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };
  const handleClose = () => {
    setModalType("");
    setOpen(false);
  };

  const login = (e) => {
    e.preventDefault();
    nProgress.start();
    console.log("Logging in...");
    console.log(email, password);
    setEmail("");
    setPassword("");
    handleClose();
    setTimeout(() => {
      nProgress.done();
    }, 3000);
  };

  const signup = (e) => {
    e.preventDefault();
    nProgress.start();
    console.log("Signing in...");
    console.log(email, password, confirmPassword);
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    handleClose();
    setTimeout(() => {
      nProgress.done();
    }, 3000);
  };

  return (
    <AuthContext.Provider
      value={{
        open,
        handleClose,
        handleOpen,
        modalType,
        login,
        signup,
        email,
        password,
        confirmPassword,
        setEmail,
        setPassword,
        setConfirmPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
