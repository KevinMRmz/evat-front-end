import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    auth: false,
    name: "",
    email: "",
    role: "",
    _id: "",
    phone: "",
    specialty: "",
  });

  const setUserInfo = (user) => {
    const newUser = {
      auth: user.auth,
      name: user.name,
      email: user.email,
      role: user.role,
      id: user._id,
      phone: user.phone,
      specialty: user.specialty,
    };

    setUser(newUser);
  };

  return (
    <UserContext.Provider value={{ user, setUserInfo }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
