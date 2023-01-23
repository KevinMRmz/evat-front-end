import React from "react";
import Layouts from "../../../layouts";
import {
  ErrorPagesTitles,
  ErrorPagesSubtitles,
} from "../../../constants/titles";

const NotFoundPage = () => {
  return (
    <Layouts.ErrorPagesLayout
      title={ErrorPagesTitles.ERROR_404}
      subtitle={ErrorPagesSubtitles.ERROR_404}
      redirect={-1}
    />
  );
};

export default NotFoundPage;
