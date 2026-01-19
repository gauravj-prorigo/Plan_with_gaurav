import { createContext, useEffect, useState } from "react";

export const Authcontext = createContext();

export function AuthProvider({ children }) {

  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  // ✅ RUN ONCE WHEN APP LOADS
  useEffect(() => {
    const storedToken = localStorage.getItem("token");

    if (storedToken) {
      setToken(storedToken);
    }

    setLoading(false);
  }, []);

  // ---------------- SIGNUP ----------------

  async function signups(sidata) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/registeruser/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(sidata),
      });

      if (response.ok) {
        // auto login after signup
        login({
          username: sidata.username,
          password: sidata.password
        });
      }

    } catch (error) {
      console.log(error);
    }
  }

  // ---------------- LOGIN ----------------

  async function login(logdata) {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/accounts/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(logdata),
      });

      const data = await response.json();

      if (response.ok) {
        saveToken(data.access);
      }

    } catch (error) {
      console.log(error);
    }
  }

  // ---------------- SAVE TOKEN ----------------

  function saveToken(token) {
    localStorage.setItem("token", token);
    setToken(token);
  }

  // ---------------- LOGOUT ----------------

  function logout() {
    localStorage.removeItem("token");
    setToken(null);
  }

  return (
    <Authcontext.Provider
      value={{
        token,
        loading,
        signups,
        login,
        logout
      }}
    >
      {children}
    </Authcontext.Provider>
  );
}
