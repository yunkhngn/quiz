import React from "react";
import { Div, Button, Icon, Input } from "atomize";
import Image from "next/image";

const Header = () => {
  return (
      <Div
        h={{ xs: "60px", md: "60px" }}
        p="1rem"
        d="flex"
        justify="flex-end"
        align="center"
        pos="fixed"
        top="0"
        left="0"
        w="100%"
        bg="#0a092d"
        zIndex="999"
      >
        <Div d="flex" align="center">
          <Button m={{ r: "1em" }} bg="#4255FF" w="40px" h="40px">
            <Icon name="Plus" size="20px" color="white" />
          </Button>
          <Button
            m={{ r: "1em" }}
            bg="#FFCD1F"
            h="40px"
            textColor="black"
            textWeight="700"
          >
            Tớ iu Chíp
          </Button>
          <Image
            src="/assets/avt.jpeg"
            alt="avt"
            width="40"
            height="40"
            priority={true}
            style={{ borderRadius: "50%" }}
          />
        </Div>
      </Div>
  );  
};

export default Header;
