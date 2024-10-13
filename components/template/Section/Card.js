import React from "react";
import { Div, Text, Tag } from "atomize";
import Link from "next/link";
const Card = ({title, description, tag, slug}) => {
  return (
    <Link href={slug}>
      <div className="cardSection">
        <Div
        p="1em"
        >
        <Text tag="h2" textSize="subheader" textColor="white">
          {title}
        </Text>
        <Tag
          bg="#586380"
          textColor="white"
          textSize="caption"
          textWeight="600"
          m={{ t: "1em" }}
          rounded="circle"
        >
          {`${tag} thuật ngữ`}
        </Tag>
        <Text 
          textSize="paragraph" 
          textColor="white" 
          m={{ t: "3em" }}
          textWeight="700"
          >
          {description}
        </Text>
        </Div>
      </div>
    </Link>
  );
};

export default Card;
