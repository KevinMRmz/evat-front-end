import { useEmployee } from "../../../hooks/Actions/useStaffActions";
import { Titles } from "../../../constants/titles";
import Components from "../../../components";
import { Link } from "react-router-dom";
import Layouts from "../../../layouts";
import Forms from "../../../forms";

const SearchStaff = () => {
  const { searchEmployees, employees } = useEmployee();

  return (
    <Layouts.SearchLayout
      searchTitle={Titles.SEARCH_STAFF}
      searchForm={<Forms.StaffSearchForm search={searchEmployees} />}
      results={employees.map((result) => (
        <Link
          to={`/admin/staff/${result._id}`}
          className="no-decoration text-black"
        >
          <Components.StaffResultCard staff={result} />
        </Link>
      ))}
    />
  );
};

export default SearchStaff;
