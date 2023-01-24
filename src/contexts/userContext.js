import { createContext, useState } from "react";

export const UserContext = createContext(null);

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({
    auth: false,
    name: "",
    role: "",
    _id: "",
    phone: "",
    speciality: "",
  });

  const setUserInfo = (user) => {
    const newUser = {
      auth: user.auth,
      name: user.name,
      role: user.role,
      id: user._id,
      phone: user.phone,
      speciality: user.speciality,
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
