import React from "react";
import cx from "classnames";

const ClassNameComp = ({ isCurrentPage, isThemeDark }) => {
  return (
    <div
      className={cx("Header", {
        "Header-active": isCurrentPage,
        "Header-dark": isThemeDark
      })}
    >
      Title
    </div>
  );
};

export default ClassNameComp;
