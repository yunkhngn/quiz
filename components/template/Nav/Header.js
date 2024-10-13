import React from "react";
import { Div, Button, Icon, Input } from "atomize";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
      <Div
        h={{ xs: "60px", md: "60px" }}
        p="1em"
        d="flex"
        justify="space-between"
        align="center"
        pos="fixed"
        top="0"
        left="0"
        w="100%"
        bg="#0a092d"
        zIndex="999"
      >
        <Div
        d="flex"
        align="center"
        m={{ l: "1em" }}
        >
        <Link href="/">
          <Image
            src="/assets/logo-white.png"
            alt="logo"
            width="30"
            height="30"
            priority={true}
          />
        </Link>
        </Div>
        <Div d="flex" align="center">
          <Button m={{ r: "1em" }} bg="#4255FF" w="40px" h="40px">
            <Icon name="Plus" size="20px" color="white" />
          </Button>
          <Link href="/library">
            <Button
              m={{ r: "1em" }}
              bg="#FFCD1F"
              h="40px"
              textColor="black"
              textWeight="700"
            >
              Học phần
            </Button>
          </Link>
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
