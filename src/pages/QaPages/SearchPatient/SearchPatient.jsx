import { usePatientActions } from "../../../api/patient-service/patient-actions";
import { Titles } from "../../../constants/titles";
import Components from "../../../components";
import { Link } from "react-router-dom";
import Layouts from "../../../layouts";
import Forms from "../../../forms";

const SearchPatient = () => {
  const { searchPatients, patients } = usePatientActions();

  return (
    <Layouts.SearchLayout
      searchTitle={Titles.SEARCH_PATIENT}
      searchForm={<Forms.PatientSearchForm search={searchPatients} />}
      results={patients.map((result) => (
        <Link
          to={`/admin/patient/${result._id}`}
          className="no-decoration text-black"
        >
          <Components.PatientResultCard patient={result} key={result._id} />
        </Link>
      ))}
    />
  );
};

export default SearchPatient;
