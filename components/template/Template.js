import React from "react";
import Meta from "./Meta";
import {Div} from 'atomize';

const Template = ({ children, urlMeta }) => {
  return (
    <Div
    w={{xs:"90vw", md:"80vw"}}
    m="120px auto 12em"
    >
      <Meta meta={urlMeta}/>
      {children}
    </Div>
  );
};

export default Template;
