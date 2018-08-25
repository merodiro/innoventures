import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import Heading from './ui/Heading'
import idea from '../static/img/idea.png'
import intercap from '../static/img/intercap.png'
import vc from '../static/img/vc.png'

const Section = styled.div`
  padding: 3em 0 5em;
  text-align: center;
`

const partnersData = [
  {
    name: 'ideaspace',
    image: idea,
  },
  {
    name: 'intercap',
    image: intercap,
  },
  {
    name: 'VC4A',
    image: vc,
  },
]

export class Partners extends Component {
  render() {
    return (
      <Section>
        <Container>
          <a href="#" className="btn btn-primary text-uppercase">
            Apply Now
          </a>
          <Heading dark>Partners</Heading>
          <div>
            {partnersData.map(partner => (
              <a href="#" key={partner.name}>
                <img src={partner.image} alt={partner.name} />
              </a>
            ))}
          </div>
        </Container>
      </Section>
    )
  }
}

export default Partners
