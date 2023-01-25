import React from "react";
import Layouts from "../../../layouts";
import {
  ErrorPagesTitles,
  ErrorPagesSubtitles,
} from "../../../constants/titles";

const ForbiddenPageNotLogin = () => {
  return (
    <Layouts.ErrorPagesLayout
      title={ErrorPagesTitles.FORBIDDEN_ERROR}
      subtitle={ErrorPagesSubtitles.FORBIDDEN_ERROR_NOT_LOGIN}
      redirect={-1}
    />
  );
};

export default ForbiddenPageNotLogin;
