import React from "react";
import Layouts from "../../../layouts";
import {
  ErrorPagesTitles,
  ErrorPagesSubtitles,
} from "../../../constants/titles";

const ForbiddenPage = () => {
  return (
    <Layouts.ErrorPagesLayout
      title={ErrorPagesTitles.FORBIDDEN_ERROR}
      subtitle={ErrorPagesSubtitles.FORBIDDEN_ERROR}
      redirect={"/"}
    />
  );
};

export default ForbiddenPage;
