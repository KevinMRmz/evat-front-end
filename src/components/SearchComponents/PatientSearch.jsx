import React, { useState } from "react";
import Select from "react-select";
import { useForm } from "react-hook-form";

const PatientSearch = ({ search }) => {
  const [orderBy, setOrderBy] = useState("name");

  const { handleSubmit, register } = useForm();

  const submit = ({ name }) => {
    const query = `${name ? `name=${name}` : ""}&sort=${orderBy}`;
    search(query);
  };

  const options = [
    { value: "name", label: "Name" },
    { value: "age", label: "Age" },
    { value: "typeOfCancer", label: "Type of cancer" },
    { value: "services", label: "Services" },
  ];

  return (
    <div className="w-100 h-80 flex flex-column">
      <form className="w-100 h-80 flex flex-column justify-evenly">
        <div className="mt-5">
          <p className="font-size-subtitles text-opacity">Order By:</p>
        </div>
        <Select
          defaultValue={orderBy}
          onChange={(option) => setOrderBy(option.value)}
          options={options}
          className="mt-5"
        />
        <div className="mt-5">
          <p className="font-size-subtitles text-opacity">Patient name:</p>
        </div>
        <div className="flex mt-5">
          <input
            type="text"
            className="form h-100 w-70 font-weight-300 font-size-small"
            placeholder="Search by name"
            {...register("name")}
          />
          <input
            type="submit"
            className="btn h-100 w-30"
            onClick={handleSubmit(submit)}
          />
        </div>
      </form>
    </div>
  );
};

export default PatientSearch;
