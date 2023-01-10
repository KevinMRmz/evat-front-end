import React, { useState } from "react";
import Components from "../../../components";
import useFetch from "../../../hooks/useFetch";
import useAlert from "../../../hooks/useAlert";
import { Link } from "react-router-dom";

const SearchStaff = () => {
  const [staffResults, setStaffResults] = useState([]);

  const { getEmployeesFilter } = useFetch();
  const { waitingResponseAlert } = useAlert();

  const staffSearch = waitingResponseAlert(async (query) => {
    const result = await getEmployeesFilter(query);
    setStaffResults([...result]);
  });

  return (
    <div className="w-100 vh-80 flex">
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Search Staff</h2>
          </div>
          <Components.StaffSearch search={staffSearch} />
        </div>
      </div>
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Results</h2>
          </div>
          <div className="w-100 h-90 overflow-y-scroll">
            {staffResults.map((result) => (
              <Link
                to={`/staff/${result._id}`}
                className="no-decoration text-black"
              >
                <Components.StaffResultCard staff={result} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchStaff;
