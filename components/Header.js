import React, { Component } from 'react'
import {
  Container,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap'
import ModalVideo from 'react-modal-video'
import styled from 'styled-components'

import img1 from '../static/img/slider1.jpg'
import img2 from '../static/img/slider2.jpg'
import img3 from '../static/img/slider3.jpg'

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -1;
`

const MyCarouselItem = styled(CarouselItem)`
  height: 100vh;
  overflow: hidden;
  flex-direction: row;
  align-items: center;
  &.active {
    display: flex;
  }
`

const DisplayHeading = styled.h1`
  padding: 2em;
  background: rgba(0, 0, 0, 0.3);
  width: 20em;
  color: var(--light);
  font-size: 2.3em;
  margin-bottom: 1em;
  @media (max-width: 768px) {
    width: 100%;
    font-size: 1.5em;
  }
`
const IconButton = styled.button`
  background: transparent;
  margin: auto;
  border: none;
`

class Header extends Component {
  state = { activeIndex: 0, animating: false, isOpen: false }

  items = [
    {
      id: 1,
      src: img1,
      otherContent: (
        <Container>
          <DisplayHeading>
            We help you turn crazy ideas into real companies.
          </DisplayHeading>
          <a
            href="#"
            className="d-block d-md-inline text-uppercase btn btn-primary btn-lg"
          >
            Apply Now
          </a>
        </Container>
      ),
    },
    {
      id: 2,
      src: img2,
      otherContent: (
        <IconButton onClick={() => this.openModal()}>
          <i className="far fa-play-circle fa-4x text-light" />
        </IconButton>
      ),
    },
    {
      id: 3,
      src: img3,
    },
  ]

  onExiting = () => {
    this.setState({
      animating: true,
    })
  }

  onExited = () => {
    this.setState({
      animating: false,
    })
  }

  next = () => {
    if (this.state.animating) return
    const nextIndex =
      this.state.activeIndex === this.items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous = () => {
    if (this.state.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? this.items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex = newIndex => {
    if (this.state.animating) return
    this.setState({ activeIndex: newIndex })
  }

  openModal = () => {
    console.log('clicked')
    this.setState({ isOpen: true })
  }

  render() {
    const { activeIndex } = this.state

    return (
      <>
        <ModalVideo
          channel="youtube"
          isOpen={this.state.isOpen}
          videoId="EhNghwDlS9g"
          onClose={() => this.setState({ isOpen: false })}
        />
        <Carousel
          activeIndex={activeIndex}
          next={this.next}
          previous={this.previous}
        >
          <CarouselIndicators
            items={this.items}
            activeIndex={activeIndex}
            onClickHandler={this.goToIndex}
          />
          {this.items.map(item => (
            <MyCarouselItem
              onExiting={this.onExiting}
              onExited={this.onExited}
              key={item.id}
            >
              <Image src={item.src} />
              {item.otherContent}
            </MyCarouselItem>
          ))}
          <CarouselControl
            direction="prev"
            directionText="Previous"
            onClickHandler={this.previous}
          />
          <CarouselControl
            direction="next"
            directionText="Next"
            onClickHandler={this.next}
          />
        </Carousel>
      </>
    )
  }
}

export default Header
