import { createContext, useState, useEffect } from "react";
import nProgress from "nprogress";
import { supabase } from "../utils/dbConfig";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(supabase.auth.user());
  const [isLoading, setIsLoading] = useState(false);
  const [authError, setAuthError] = useState("");

  useEffect(() => {
    supabase.auth.onAuthStateChange((event, session) => {
      setCurrentUser(session?.user);
    });
  }, []);

  const signin = async () => {
    setIsLoading(true);
    nProgress.start();
    const res = await supabase.auth.signIn(
      { provider: "google" },
      {
        redirectTo: "http://localhost:3000/dashboard",
      }
    );
    if (res.error) {
      setAuthError(res.error.message);
      return;
    }
    setCurrentUser(res.user);
    nProgress.done();
    setIsLoading(false);
  };

  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <AuthContext.Provider
      value={{
        signin,
        isLoading,
        currentUser,
        authError,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
