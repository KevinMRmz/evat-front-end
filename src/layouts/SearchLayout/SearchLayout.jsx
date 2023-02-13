import React from "react";

const SearchLayout = ({ searchTitle, searchForm, results }) => {
  return (
    <div className="w-100 vh-80 flex">
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">{searchTitle}</h2>
          </div>
          {searchForm}
        </div>
      </div>
      <div className="w-50 flex-center">
        <div className="w-90 h-90">
          <div className="title-container-border w-100">
            <h2 className="m-5">Results</h2>
          </div>
          <div className="w-100 h-90 overflow-y-scroll">{results}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchLayout;
