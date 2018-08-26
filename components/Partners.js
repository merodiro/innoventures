import React, { Component } from 'react'
import { Container } from 'reactstrap'
import styled from 'styled-components'

import Heading from './ui/Heading'
import idea from '../static/img/idea.png'
import intercap from '../static/img/intercap.png'
import vc from '../static/img/vc.png'
import glamorous from '../static/img/glamorous.svg'

const Section = styled.div`
  padding: 3em 0 5em;
  text-align: center;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: 0.1;
    z-index: -1;
    background-image: url(${glamorous});
  }
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
                <img
                  className="d-block d-md-inline-block m-auto"
                  src={partner.image}
                  alt={partner.name}
                />
              </a>
            ))}
          </div>
        </Container>
      </Section>
    )
  }
}

export default Partners
