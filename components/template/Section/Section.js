import React from 'react'
import {Div, Text} from 'atomize'
import Card from './Card'

const Section = () => {
  const data = [
    {
      title: 'Quốc kì thế giới',
      description: 'Description',
      tag: '124',
      slug: '/'
    },
    {
      title: 'Math',
      description: 'Description',
      tag: '156',
      slug: '/'
    },
    {
      title: 'English',
      description: 'Description',
      tag: '15',
      slug: '/'
    }
  ]
  return (
    <Div>
      <Text
      m={{ b: '1em' }}
      textSize='title'
      textWeight='800'
      >Title</Text>
      <div
      className='category'
      >
        {data.map((item, index) => (
          <Card
          key={index}
          slug={item.slug}
          title={item.title}
          description={item.description}
          tag={item.tag}
          />
        ))}
      </div>
    </Div>
  )
}

export default Section