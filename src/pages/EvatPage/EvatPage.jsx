import React, { useState, useContext, useEffect } from "react";
import { ErrorMessageContext } from "../../contexts/errorMessageContext";
import useEvatAction from "../../hooks/Actions/useFormActions";
import EvatAlgorithm from "../../evat-algorithm";
import Components from "../../components";
import { useForm } from "react-hook-form";
import Select from "react-select";
import { useParams } from "react-router-dom";

const EvatPage = () => {
  const { handleSubmit, register, watch, setValue } = useForm();
  const { id } = useParams();
  const [temperature, setTemperature] = useState("36");
  const [rightPupil, setRightPupil] = useState("R");
  const [leftPupil, setLeftPupil] = useState("R");
  const { errorMessage, cleanMessage } = useContext(ErrorMessageContext);
  const { heartRateTable, breathingRateTable, resultRateLevel } = EvatAlgorithm;
  const { createEvatForm } = useEvatAction();

  useEffect(() => cleanMessage(), []);

  setValue(
    "cardio",
    resultRateLevel(4, parseInt(watch("FC")) || 0, heartRateTable)
  );

  setValue(
    "resp",
    resultRateLevel(4, parseInt(watch("FR")) || 0, breathingRateTable)
  );

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
    <div className="w-100 flex-center vh-100">
      <span className="background-img-user" />
      <form
        onSubmit={handleSubmit((data) =>
          createEvatForm({
            ...data,
            idPatient: id,
            temperature,
            rightPupil,
            leftPupil,
          })
        )}
        className="w-80 h-100 flex flex-column align-items-center justify-evenly"
      >
        <div className="title-container-patients w-100">
          <h2>Patient Evat Form</h2>
        </div>

        <div className="flex justify-evenly w-100">
          <input
            type="number"
            {...register("hour")}
            placeholder="Hour"
            className="form m-5 w-100"
          />
          <input
            type="number"
            {...register("capillaryRefill")}
            placeholder="Capillary Refill"
            className="form m-5 w-100"
          />
        </div>

        <div className="flex align-items-center justify-evenly w-100">
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
        <div className="flex justify-evenly w-100">
          <input
            type="number"
            {...register("FC")}
            placeholder="FC"
            className="form m-5"
          />
          <input
            type="number"
            {...register("FR")}
            placeholder="FR"
            className="form m-5"
          />
          <input
            type="number"
            {...register("SO2")}
            placeholder="SO2"
            className="form m-5"
          />
        </div>
        <div className="flex w-100 justify-evenly">
          <input
            type="number"
            {...register("bloodPressure")}
            placeholder="Blood pressure"
            className="form m-5"
          />
          <input
            type="number"
            {...register("ltsO2")}
            placeholder="LtsO2"
            className="form m-5"
          />
          <input
            type="number"
            {...register("pain")}
            placeholder="Pain"
            className="form m-5"
          />
        </div>
        <div className="title-container-border w-90">
          <h3 className="bold m-5">Evat</h3>
        </div>
        <div className="flex w-100 justify-evenly">
          <input
            type="number"
            {...register("neuro")}
            placeholder="Neuro"
            className="form m-5"
          />
          <input
            type="number"
            {...register("cardio")}
            placeholder="Cardio"
            className="form m-5"
          />
          <input
            type="number"
            {...register("resp")}
            placeholder="Respiratory"
            className="form m-5"
          />
        </div>
        <div className="flex w-100 justify-evenly">
          <input
            type="number"
            {...register("nurseConcern")}
            placeholder="Nurse Concern"
            className="form m-5"
          />
          <input
            type="number"
            {...register("familyConcern")}
            placeholder="Family Concern"
            className="form m-5"
          />
        </div>
        <Components.Message message={errorMessage} />

        <button className="btn m-5 w-60">Send</button>
      </form>
    </div>
  );
};

export default EvatPage;
