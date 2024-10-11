import React from "react";
import { Div, Button, Icon } from "atomize";
import Image from "next/image";
import Link from "next/link";
const Header = () => {
  return (
    <Div
      pos="fixed"
      top="0"
      left="0"
      w="100%"
      bg="#0a092d"
      h="60px"
      p="12px 16px"
      d="flex"
      justify="space-between"
      align="center"
    >
      <Link href="/">
        <Image src="/assets/logo-white.png" alt="logo" width="30" height="30" priority={true}/>
      </Link>
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
