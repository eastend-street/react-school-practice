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
      Here is classnames component
    </div>
  );
};

export default ClassNameComp;
