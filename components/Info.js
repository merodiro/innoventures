import React, { Component } from 'react'
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
} from 'reactstrap'
import styled from 'styled-components'

import paper from '../static/img/paper.png'

const MyCarousel = styled(Carousel)`
  background-size: cover;
  background-image: url(${paper});
  min-height: 30em;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
`

const Item = styled.div`
  background: rgba(0, 0, 0, 0.5);
  color: var(--light);
  width: 100%;
  margin: auto;
  padding: 2em;
  height: auto;
  @media (min-width: 768px) {
    width: 50em;
  }
`

const items = [
  {
    title:
      'EGYPT’S STARTUP REACTOR ANNOUNCES THE LAUNCH OF SECOND PHASE OF FIFTH CYCLE!',
    body:
      'Startup Reactor has concluded the first phase of the fifth cycle, “Spark” with over 200 participants in the Entrepreneurial awareness workshops. 50 companies were accepted into the second phase of the cycle, Ignition. The second phase, Ignition, is the take-off phase. The selected companies will attend 7 concentrated sessions and receive intensive mentorship, while Innoventures assesses their business model and team.',
    date: 'February 20, 2018',
    author: 'Salma Nassar',
  },
  {
    title: 'EGYPT’S STARTUP REACTOR IS SEEKING OUT STARTUPS!',
    body:
      'Following the successful conclusion of its 4th cycle with its last phase “Startup Nova – Entrepreneurship Explosion”, Startup Reactor is accepting applications for its 5th cycle!.',
    date: 'January 9th, 2018',
    author: 'Salma Nassar',
  },
  {
    title: 'Innoventures Announces 4 Winners of Startup Reactor Cycle Four',
    body:
      'On the 5th of December, Innoventures held “Startup Nova - Entrepreneurship Explosion” at the prestigious Hilton Ramses, as the final phase of its Startup Reactor program’s fourth cycle. Cash prizes of 15,000 Euro total were given to four promising startups by VC4A, the program’s partner and main sponsor. Innoventures also announced an upcoming 100 million EGP fund for startup ventures based in Egypt.',
    date: 'December 13, 2017',
    author: 'Salma Nassar',
  },
]

class Info extends Component {
  constructor(props) {
    super(props)
    this.state = { activeIndex: 0 }
    this.next = this.next.bind(this)
    this.previous = this.previous.bind(this)
    this.goToIndex = this.goToIndex.bind(this)
    this.onExiting = this.onExiting.bind(this)
    this.onExited = this.onExited.bind(this)
  }

  onExiting() {
    this.animating = true
  }

  onExited() {
    this.animating = false
  }

  next() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === items.length - 1
        ? 0
        : this.state.activeIndex + 1
    this.setState({ activeIndex: nextIndex })
  }

  previous() {
    if (this.animating) return
    const nextIndex =
      this.state.activeIndex === 0
        ? items.length - 1
        : this.state.activeIndex - 1
    this.setState({ activeIndex: nextIndex })
  }

  goToIndex(newIndex) {
    if (this.animating) return
    this.setState({ activeIndex: newIndex })
  }

  render() {
    const { activeIndex } = this.state

    const slides = items.map(item => {
      return (
        <CarouselItem
          onExiting={this.onExiting}
          onExited={this.onExited}
          key={item.src}
          style={{
            background: 'red',
          }}
        >
          <Item>
            <h4 className="text-center">{item.title}</h4>
            <div className="text-center my-3">
              <i className="fas fa-calendar-alt mr-2" />
              <a href="#" className="mr-4 text-light">
                Posted on {item.date}
              </a>
              <i className="fas fa-user mr-2" />
              <a href="#" className="text-light">
                {item.author}
              </a>
            </div>
            <p>{item.body}</p>
          </Item>
        </CarouselItem>
      )
    })

    return (
      <MyCarousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      >
        <CarouselIndicators
          items={items}
          activeIndex={activeIndex}
          onClickHandler={this.goToIndex}
        />
        {slides}
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
      </MyCarousel>
    )
  }
}

export default Info
