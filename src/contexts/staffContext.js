import React, { createContext, useState } from "react";

export const StaffContext = createContext();

const StaffProvider = ({ children }) => {
  const [staff, setStaff] = useState({});

  const setStaffInfo = (data) => {
    setStaff({
      id: data._id,
      name: data.name,
      email: data.email,
      role: data.role,
      phone: data.phone,
      specialty: data.specialty,
    });
  };

  return (
    <StaffContext.Provider value={{ staff, setStaffInfo }}>
      {children}
    </StaffContext.Provider>
  );
};

export default StaffProvider;
