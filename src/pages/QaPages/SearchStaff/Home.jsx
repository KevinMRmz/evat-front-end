import { useEmployee } from "../../../hooks/Actions/useStaffActions";
import Components from "../../../components";
import { Link } from "react-router-dom";

const SearchStaff = () => {
  const { searchEmployees, employees } = useEmployee();

  return (
    <div className="w-100 vh-80 flex">
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Search Staff</h2>
          </div>
          <Components.StaffSearch search={searchEmployees} />
        </div>
      </div>
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Results</h2>
          </div>
          <div className="w-100 h-90 overflow-y-scroll">
            {employees.map((result) => (
              <Link
                to={`/admin/staff/${result._id}`}
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
