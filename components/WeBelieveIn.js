import React from 'react'
import { Container, Col, Row } from 'reactstrap'

import venture from '../static/img/venture.svg'
import venture2 from '../static/img/venture2.svg'
import venture3 from '../static/img/venture3.svg'

import styled from 'styled-components'
import Heading from './ui/Heading'

const features = [
  {
    title: 'INNOVATION',
    description:
      'Our network of high-profile investors guarantee you getting the right fund and making the right decisions.',
    image: venture,
  },
  {
    title: 'Credibile Investment',
    description:
      'We target ideas that shake the world and help them grow into concrete, sustainable, and ready-to-scale businesses.',
    image: venture2,
  },
  {
    title: 'Ongoing Support',
    description:
      'We help you get your feet on the ground and guide you onwards and upwards throughout your journey.',
    image: venture3,
  },
]

const Feature = styled.div`
  transition: all ease-in-out 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`

const WeBelieveIn = () => {
  return (
    <Container className="mb-5">
      <Heading dark>We Believe In</Heading>
      <Row>
        {features.map(feature => (
          <Col md key={feature.title}>
            <Feature className="text-center feature">
              <img className="my-4" src={feature.image} />
              <h3>{feature.title}</h3>
              <p className="lead text-muted">{feature.description}</p>
            </Feature>
          </Col>
        ))}
      </Row>
    </Container>
  )
}

export default WeBelieveIn
