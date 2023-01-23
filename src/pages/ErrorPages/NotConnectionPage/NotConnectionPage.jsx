import React from "react";
import Layouts from "../../../layouts";
import {
  ErrorPagesTitles,
  ErrorPagesSubtitles,
} from "../../../constants/titles";

const NotConnectionPage = () => {
  return (
    <Layouts.ErrorPagesLayout
      title={ErrorPagesTitles.NOT_CONNECTION}
      subtitle={ErrorPagesSubtitles.NOT_CONNECTION}
      redirect={-1}
    />
  );
};

export default NotConnectionPage;
