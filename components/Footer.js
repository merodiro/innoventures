import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import styled from 'styled-components'

import circuit from '../static/img/circuit-board.svg'

const Section = styled.footer`
  padding: 3em 0;
  position: relative;
  color: var(--light);
  background-color: var(--dark);
  * {
    z-index: 1;
  }
  &::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    opacity: .4;
    z-index: 0;
    background-image: url(${circuit});
  }
`
const Icon = styled.i`
  color: ${props => props.color};
`

const Copyrights = styled.div`
  background: var(--primary);
  color: var(--light);
  padding: 0.5em 0;
`

const Footer = () => (
  <>
    <Section>
      <Container>
        <Row>
          <Col lg="4" md="6">
            <ul className="list-unstyled">
              <li>
                <a href="#" className="text-light">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Startup Reactor
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Ventures
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Gurus
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Ideaspace
                </a>
                {' | '}
                <a href="#" className="text-light">
                  About
                </a>
                {' | '}
                <a href="#" className="text-light">
                  Team
                </a>
                {' | '}
                <a href="#" className="text-light">
                  News
                </a>
                {' | '}
                <a href="#" className="text-light">
                  Blog
                </a>
                {' | '}
                <a href="#" className="text-light">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-light">
                  Contact
                </a>
              </li>
            </ul>
          </Col>
          <Col lg md="6">
            <h4>Email</h4>
            <p>
              General inquiries:{' '}
              <a className="text-light" href="mailto:info@innoventures.me">
                info@innoventures.me
              </a>
              <br />
              Careers:{' '}
              <a className="text-light" href="mailto:careers@innoventures.me">
                careers@innoventures.me
              </a>
            </p>
            <h4>Phone</h4>
            <p>
              Phone: +20-2-2774-4374
              <br />
              Fax: +20-2-2774-4946
            </p>
          </Col>
          <Col lg md="6">
            <h4>Address</h4>
            <p>
              Headquarters: ideaspace Helio, 124 Othman Ibn Afan St, Unit #33
              Heliopolis, Cairo 11361 Egypt
            </p>
          </Col>
          <Col lg="2" md="6">
            <h4>Follow Us</h4>
            <a href="#" className="mr-3">
              <Icon color="#3b5998" className="fab fa-lg fa-facebook" />
            </a>
            <a href="#" className="mr-3">
              <Icon color="#1da1f2" className="fab fa-lg fa-twitter" />
            </a>
            <a href="#" className="mr-3">
              <Icon color="#0077b5" className="fab fa-lg fa-linkedin" />
            </a>
          </Col>
        </Row>
      </Container>
    </Section>
    <Copyrights>
      <Container className="d-flex justify-content-between">
        <span>All Rights Reserved For Innoventures</span>
        <span>2018</span>
      </Container>
    </Copyrights>
  </>
)

export default Footer
