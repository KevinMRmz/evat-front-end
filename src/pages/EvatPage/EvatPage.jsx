import React, { useState, useContext } from "react";
import GeneralComponents from "../../components/GeneralComponents";
import useEvatActions from "../../api/evat-service/useEvatActions";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useParams } from "react-router-dom";
import { Titles } from "../../constants/titles";
import colors from "../../constants/evatColors";
import { PatientContext } from "../../contexts/patientContext";

const calcMonths = (date) => {
  const years = parseInt(date.slice(0, 4));
  const currentYear = new Date().getFullYear();
  const monthsPerYear = (currentYear - years) * 12;
  const patientMonths = parseInt(date.slice(5, 7));
  const months = new Date().getMonth() + 1 - patientMonths + monthsPerYear;
  return months;
};

const EvatPage = () => {
  const { handleSubmit, register, watch } = useForm();
  const { id } = useParams();
  const { patient } = useContext(PatientContext);
  const [temperature, setTemperature] = useState("36");
  const [rightPupil, setRightPupil] = useState("R");
  const [leftPupil, setLeftPupil] = useState("R");
  const [evatCardio, setEvatCardio] = useState(0);
  const [evatResp, setEvatResp] = useState(0);
  const { createEvatForm } = useEvatActions();
  const months = calcMonths(patient.birthDate);

  const rightPupilOptions = [
    { value: "R", label: "R" },
    { value: "NR", label: "NR" },
  ];

  const leftPupilOptions = [
    { value: "R", label: "R" },
    { value: "NR", label: "NR" },
  ];

  const temperatureOptions = [
    { value: "39.5>", label: "39.5>" },
    { value: "39.5", label: "39.5" },
    { value: "39", label: "39" },
    { value: "38.5", label: "38.5" },
    { value: "38", label: "38" },
    { value: "37.5", label: "37.5" },
    { value: "37", label: "37" },
    { value: "36.5", label: "36.5" },
    { value: "36", label: "36" },
    { value: "35.5", label: "35.5" },
    { value: "35", label: "35" },
  ];

  return (
    <div className="w-100 flex-center vh-85 mt-5">
      <form
        onSubmit={handleSubmit((data) => {
          createEvatForm({
            ...data,
            idPatient: id,
            temperature,
            rightPupil,
            leftPupil,
            cardio: evatCardio,
            resp: evatResp,
          });
        })}
        className="w-80 h-100 flex flex-column align-items-center justify-evenly"
      >
        <GeneralComponents.Title title={Titles.PATIENT_EVAT_FORM} />

        <div className="overflow-y-scroll flex flex-column w-100 align-items-center">
          <input
            type="number"
            {...register("hour")}
            placeholder="Hour"
            className="form m-5 w-90"
          />
          <input
            type="number"
            {...register("capillaryRefill")}
            placeholder="Capillary Refill"
            className="form m-5 w-90"
          />

          <div className="w-90 flex justify-evenly">
            <div className="w-70 flex justify-evenly align-items-center m-5">
              <span className="bold">Temperature:</span>
              <Select
                defaultValue={temperature}
                onChange={(option) => setTemperature(option.value)}
                options={temperatureOptions}
              />
            </div>
            <div className="w-70 flex justify-evenly align-items-center m-5">
              <span className="bold">Right Pupil</span>
              <Select
                defaultValue={rightPupil}
                onChange={(option) => setRightPupil(option.value)}
                options={rightPupilOptions}
              />
            </div>
            <div className="w-70 flex justify-evenly align-items-center m-5">
              <span className="bold">Left Pupil</span>
              <Select
                defaultValue={leftPupil}
                onChange={(option) => setLeftPupil(option.value)}
                options={leftPupilOptions}
              />
            </div>
          </div>

          <input
            type="number"
            {...register("FC")}
            placeholder="FC"
            className="form m-5 w-90 text-white"
            style={{
              backgroundColor:
                evatCardio === -1 ? colors[0] : colors[evatCardio],
            }}
          />
          <input
            type="number"
            {...register("FR")}
            placeholder="FR"
            className="form m-5 w-90 text-white"
            style={{
              backgroundColor: evatResp === -1 ? colors[0] : colors[evatResp],
            }}
          />
          <input
            type="number"
            {...register("SO2")}
            placeholder="SO2"
            className="form m-5 w-90"
          />
          <input
            type="number"
            {...register("bloodPressure")}
            placeholder="Blood pressure"
            className="form m-5 w-90"
          />
          <input
            type="number"
            {...register("ltsO2")}
            placeholder="LtsO2"
            className="form m-5 w-90"
          />
          <input
            type="number"
            {...register("pain")}
            placeholder="Pain"
            className="form m-5 w-90"
          />
          <div className="title-container-border w-90">
            <h3 className="bold m-5">Evat</h3>
          </div>
          <input
            type="number"
            {...register("neuro")}
            placeholder="Neuro"
            className="form m-5 w-90"
          />

          <div className="w-90 flex justify-evenly">
            <div
              className="w-30 flex justify-evenly align-items-center bold m-5"
              style={{ color: colors[evatCardio] }}
            >
              Cardiological:{" "}
              <GeneralComponents.EvatColorCardio
                cardioInput={parseInt(watch("FC")) || 0}
                patientMonths={months}
                setEvatCardio={setEvatCardio}
              />
            </div>
            <div
              className="w-30 flex justify-evenly align-items-center bold m-5"
              style={{ color: colors[evatResp] }}
            >
              Respiratory:{" "}
              <GeneralComponents.EvatColorRespiratory
                respInput={parseInt(watch("FR")) || 0}
                patientMonths={months}
                setEvatResp={setEvatResp}
              />
            </div>
          </div>
          <input
            type="number"
            {...register("nurseConcern")}
            placeholder="Nurse Concern"
            className="form m-5 w-90"
          />
          <input
            type="number"
            {...register("familyConcern")}
            placeholder="Family Concern"
            className="form m-5 w-90"
          />
        </div>

        <GeneralComponents.ErrorMessage />
        <button className="btn m-5 w-60">Send</button>
      </form>
      <GeneralComponents.ReturnPatientPage id={id} />
    </div>
  );
};

export default EvatPage;
