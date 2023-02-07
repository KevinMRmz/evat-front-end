import React from "react";
import GeneralComponents from "../../components/GeneralComponents";

const CardsLayout = ({ cards, title }) => {
  return (
    <div className="w-100">
      <div className="w-100 flex-center">
        <div className="w-70 flex-center mt-5">
          <GeneralComponents.Title title={title} />
        </div>
      </div>
      <div className="w-100 flex-center vh-70">
        <div className="flex w-90 h-100 flex-column overflow-y-scroll">
          {cards.length !== 0 ? (
            <>{cards}</>
          ) : (
            <h2 className="danger-text mt-5 text-center">
              No results where found
            </h2>
          )}
        </div>
      </div>
    </div>
  );
};

export default CardsLayout;
