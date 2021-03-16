import React from "react";
import Parser from "html-react-parser";
import iconPath from "./IconLib";

export default function Icon(props) {
  const { name /*, className*/ } = props;
  return (
    <>
      {/* <div className={className}> */}
      {Parser(iconPath[name])}
      {/* </div> */}
    </>
  );
}

Icon.defaultProps = {
  name: "",
  className: "",
};
