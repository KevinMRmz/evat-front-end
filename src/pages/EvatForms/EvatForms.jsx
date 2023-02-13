import useFetch from "../../hooks/useFetch";
import useFetchDataById from "../../hooks/useFetchDataById";
import { useParams } from "react-router-dom";
import RecordCard from "../../components/ResultsCards/RecordCard";
import { useState } from "react";
import GeneralComponents from "../../components/GeneralComponents";
import useEvatActions from "../../api/evat-service/useEvatActions";

const EvatFormInformation = ({ evatForm }) => {
  return (
    <div className="m-5">
      {Object.keys(evatForm).map((key) => (
        <div>
          <div className="title-container-border mt-5">
            <h3>
              {key.charAt(0).toUpperCase() +
                key.slice(1).replace(/[A-Z]/g, (match) => ` ${match}`)}
            </h3>
          </div>
          <p className="m-5">{evatForm[key]}</p>
        </div>
      ))}
    </div>
  );
};

const EvatForm = () => {
  const { patientRecords } = useFetch();
  const { id } = useParams();
  const { data, setData } = useFetchDataById(patientRecords, id);
  const [evatForm, setEvatForm] = useState({});
  const { removeEvatForm, removeAllPatientForms } = useEvatActions();

  const changeList = (id) => {
    const listChanged = data.filter((form) => form._id !== id);
    setData(listChanged);
  };

  return (
    <div className="w-100 vh-80 flex">
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100 flex justify-between">
            <h2 className="m-5">Patient Evat</h2>
          </div>
          <div className="h-90 flex flex-column justify-between">
            <div className="w-100 h-100 overflow-y-scroll">
              {data.length !== 0 ? (
                data.map((result) => (
                  <div onClick={() => setEvatForm(result)}>
                    <RecordCard record={result} />
                  </div>
                ))
              ) : (
                <h3 className="text-center color-red mt-5">
                  This patient does not have a Evat forms
                </h3>
              )}
            </div>
            <button
              className={`btn bg-black no-border-radius w-100 ${
                data.length !== 0 ? "" : "opacity-5"
              }`}
              onClick={async () => {
                if (await removeAllPatientForms(id)) {
                  setEvatForm({});
                  setData([]);
                }
              }}
            >
              Delete all forms
            </button>
          </div>
        </div>
      </div>
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Evat Form</h2>
          </div>
          <div className="h-90 flex flex-column justify-between">
            <div className="h-100 overflow-y-scroll justify-evenly">
              <EvatFormInformation evatForm={evatForm} />
            </div>
            <div
              className={`flex justify-evenly ${
                evatForm._id ? "" : "opacity-5"
              }`}
            >
              <div className="flex-center w-50">
                <button
                  className="btn btn-danger w-100 no-border-radius"
                  onClick={async () => {
                    if (await removeEvatForm(evatForm._id)) {
                      changeList(evatForm._id);
                      setEvatForm({});
                    }
                  }}
                >
                  Delete form
                </button>
              </div>
              <div className="flex-center w-50">
                <button className="btn w-100 no-border-radius">
                  Update form
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GeneralComponents.ReturnPatientPage id={id} />
    </div>
  );
};

export default EvatForm;
