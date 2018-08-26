import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import styled from 'styled-components'

import Heading from './ui/Heading'
import glamorous from '../static/img/glamorous.svg'

const features = [
  {
    title: 'INNOVATION',
    description:
      'Our network of high-profile investors guarantee you getting the right fund and making the right decisions.',
    icon: 'far fa-lightbulb',
  },
  {
    title: 'Credibile Investment',
    description:
      'We target ideas that shake the world and help them grow into concrete, sustainable, and ready-to-scale businesses.',
    icon: 'fas fa-hand-holding-usd ',
  },
  {
    title: 'Ongoing Support',
    description:
      'We help you get your feet on the ground and guide you onwards and upwards throughout your journey.',
    icon: 'fas fa-users ',
  },
]

const Feature = styled.div`
  transition: all ease-in-out 0.5s;
  &:hover {
    transform: scale(1.1);
  }
`

const Icon = styled.i`
  font-size: 5em;
  margin: 0.5em 0;
`

const Section = styled.div`
  position: relative;
  padding: 2em 0;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .1;
    background-image: url(${glamorous});
    z-index: -1;
  }
`

const WeBelieveIn = () => (
  <Section>
    <Container>
      <Heading dark>We Believe In</Heading>
      <Row>
        {features.map(feature => (
          <Col md key={feature.title}>
            <Feature className="text-center feature">
              <Icon className={feature.icon} />
              <h3>{feature.title}</h3>
              <p className="lead text-muted">{feature.description}</p>
            </Feature>
          </Col>
        ))}
      </Row>
    </Container>
  </Section>
)

export default WeBelieveIn
