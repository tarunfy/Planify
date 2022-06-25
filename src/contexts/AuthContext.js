import { createContext, useState, useEffect } from "react";
import nProgress from "nprogress";
import { supabase } from "../utils/dbConfig";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(supabase.auth.user());
  const [isFetching, setIsFetching] = useState(true);
  const [open, setOpen] = useState(false);
  const [modalType, setModalType] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      console.log("auth state changed called");
      setCurrentUser(session?.user);
      setIsFetching(false);
    });
  }, []);

  const handleOpen = (type) => {
    setModalType(type);
    setOpen(true);
  };

  const handleClose = () => {
    setModalType("");
    setAuthError("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setOpen(false);
  };

  const login = async (e, email, password) => {
    e.preventDefault();
    nProgress.start();
    setIsLoading(true);

    const { error } = await supabase.auth.signIn({
      email,
      password,
    });
    if (error) {
      setAuthError(error.message);
    } else {
      handleClose();
    }

    setIsLoading(false);
    nProgress.done();
  };

  const signup = async (e, email, password, confirmPassword) => {
    e.preventDefault();
    nProgress.start();
    setIsLoading(true);

    if (password !== confirmPassword) {
      setAuthError("Passwords not match");
      setIsLoading(false);
      nProgress.done();
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setAuthError(error.message);
    } else {
      handleClose();
    }

    setIsLoading(false);
    nProgress.done();
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
        isLoading,
        currentUser,
        isFetching,
        authError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
