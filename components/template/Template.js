import React from "react";
import Meta from "./Meta";
import {Div} from 'atomize';

const Template = ({ children, urlMeta }) => {
  return (
    <Div
    w={{xs:"90vw", md:"60vw"}}
    m="70px auto 0"
    >
      <Meta meta={urlMeta}/>
      {children}
    </Div>
  );
};

export default Template;
