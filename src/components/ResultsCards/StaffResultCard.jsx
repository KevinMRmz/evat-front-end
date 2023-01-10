import React from "react";

const StaffResultCard = ({ staff }) => {
  return (
    <div className="w-100 flex flex-column justify-between card-shadow p-5 pointer">
      <div className="w-100 flex justify-between m-3 nowrap">
        <div>
          Name: <span className="name-color bold">{staff.name}</span>
        </div>
        <div>
          Role: <span className="age-color">{staff.role}</span>
        </div>
      </div>
      <div className="w-100 flex justify-between m-3 nowrap">
        <div>
          Email: <span className="email-color">{staff.email}</span>
        </div>
        {staff.specialty !== "NONE" ? (
          <div>
            Specialty: <span className="bold">{staff.specialty}</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default StaffResultCard;
