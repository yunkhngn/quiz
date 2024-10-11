import React from "react";
import { Input, Icon } from "atomize";

const Search = ({display}) => {
  return (
    <Input
    placeholder="Tìm kiếm bài học"
    d={display}
    w={{ xs: "90%", md: "300px" }}
    m="auto"
    bg="#2e3856"
    border="none"
    textColor="#d9dde8"
    textWeight="700"
    focusBorderColor="red"
    prefix={
      <Icon
        name="Search"
        size="20px"
          color="#d9dde8"
        cursor="pointer"
        pos="absolute"
        top="50%"
        right="1rem"
        transform="translateY(-50%)"
      />
    }
  />
  );
};

export default Search;
