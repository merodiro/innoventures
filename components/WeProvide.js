import React from 'react'
import { Container, Col, Row } from 'reactstrap'
import styled from 'styled-components'
import Heading from './ui/Heading'
import { Consultancy } from './Consultancy'

const features = [
  {
    name: 'Funding',
    description:
      'We offer seed funding throughout our program with additional funding at later stages. We give you the chance to pitch your idea to the right people.',
    icon: 'far fa-money-bill-alt',
    color: 'var(--blue)',
  },
  {
    name: 'Mentorship',
    description:
      'You get exclusive access to and regular mentorship from a powerful network of Egypt’s leading business experts.',
    icon: 'fas fa-users',
    color: 'var(--red)',
  },
  {
    name: 'Office',
    description:
      'We offer access to office space, various facilities and support staff. Through Ideaspace, you become part of a community of driven, like-minded individuals and benefit from their experiences and knowledge.',
    icon: 'fas fa-home',
    color: 'var(--yellow)',
  },
]

const Icon = styled.i`
  color: ${props => props.color};
  border: 2px solid ${props => props.color};
  border-radius: 50%;
  line-height: 58px;
  transition: all 0.9s ease-in-out;
  height: 60px;
  width: 60px;
`

const Feature = styled.div`
  p {
    padding-bottom: 1.5em;
    border-bottom: 1px solid rgba(200, 200, 200, 0.7);
  }
  padding-bottom: 3em;
`

import icons from '../static/img/icons.png'
// import circuit from '../static/img/circuit-board.svg'

const Section = styled.div`
  padding: 3em 0;
  background-color: var(--dark);
  background-image: url(${icons});
  `

const WeProvide = () => {
  return (
    <Section className="text-light">
      <Container>
        <Heading>We Provide</Heading>
        {features.map((feature, i) => (
          <Feature key={feature.name} className="text-center">
            <Row>
              <Col md={{ size: 2, order: i % 2 == 1 ? 1 : 0 }}>
                <h3 className="mb-3">{feature.name}</h3>
                <Icon
                  className={`fa-2x ${feature.icon}`}
                  color={feature.color}
                />
              </Col>
              <Col md>
                <p className="lead mt-3">{feature.description}</p>
              </Col>
            </Row>
          </Feature>
        ))}
        <Consultancy />
      </Container>
    </Section>
  )
}

export default WeProvide
