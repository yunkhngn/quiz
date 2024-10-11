import React from 'react'
import { Div, Icon, Text } from 'atomize'
import Image from 'next/image'
import Link from 'next/link'

const Nav = () => {
  const navItems = [
    {
      icon: 'Home',
      link: '/',
      text: 'Trang chủ'
    },
    {
      icon: 'Folder',
      link: '/library',
      text: 'Thư viện'
    },
    {
      icon: 'User',
      link: '/profile',
      text: 'Hồ sơ'
    }
  ]
  return (
    <Div
    p={{ x: '1rem' }}
    h="100vh"
    pos="fixed"
    top="0"
    left="0"
    bg="#0a092d"
    d={{ xs: 'none', md: 'flex' }}
    flexDir="column"
    align="left"
    justify="flex-start"
    zIndex="1000"
    m={{t:"1em"}}
    >
      <Link href="/">
          <Image
            src="/assets/logo-white.png"
            alt="logo"
            width="30"
            height="30"
            priority={true}
            style={{
              marginLeft: "0.5rem",
             }}
          />
        </Link>
        <Div
        m={{ t: '1rem' }}
        >
      {navItems.map((item, index) => (
        <Div
        key={index}
        w="200px"
        p={{ x: '0.5rem',y:"0.5rem" }}
        d="flex"
        align="center"
        justify="flex-start"
        hoverBg="#2E3856"
        cursor="pointer"
        transition
        rounded="10px"
        m={{ b: '3px' }}
        >
          <Icon name={item.icon} size="20px" color="white" m={{r:"1em"}} />
          <Text
          textSize="paragraph"
          textWeight="600"
          >{item.text}</Text>
        </Div>
      ))  
      }
      </Div>
    </Div>
  )
}

export default Nav