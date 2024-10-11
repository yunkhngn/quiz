import React from "react";
import Meta from "./Meta";

const Template = ({ children, urlMeta }) => {
  return (
    <div>
      <Meta meta={urlMeta}/>
      {children}
    </div>
  );
};

export default Template;
