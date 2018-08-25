import React, { Component } from 'react'
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap'
import styled from 'styled-components'

const Section = styled.div`
  padding: 1.5em;
  border-radius: 1em;
`

const Tab = styled(NavLink)`
  background: ${props => props.background};
  margin: 0 0.5em;
  padding: 1.5em;
  &&&:not(.active) {
    color: var(--light);
  }
`

const tabs = [
  {
    title: 'Strategy',
    icon: 'fas fa-cog',
    color: 'var(--red)',
    description:
      'We offer management consultancy to help you develop your business model and plan to get things running, and follow up with you as you grow.',
  },
  {
    title: 'Marketing',
    icon: 'fas fa-bullhorn',
    color: 'var(--blue)',
    description:
      'Our team offers consultancy on marketing to provide what you need to get your voice heard and establish a public presence.',
  },
  {
    title: 'Finance',
    icon: 'fas fa-dollar-sign',
    color: 'var(--green)',
    description:
      'We have an exceptional financial staff to help you navigate the tricky world of numbers and projections, which you can consult with throughout our program.',
  },
  {
    title: 'Technical',
    icon: 'fas fa-microchip',
    color: 'var(--teal)',
    description:
      'There is a dedicated IT infrastructure that helps you establish your business',
  },
  {
    title: 'Legal',
    icon: 'fas fa-balance-scale',
    color: 'var(--indigo)',
    description:
      'Our legal team will provide help understanding the laws and regulations of starting a real company, from registering your company to getting your brand protected.',
  },
]

export class Consultancy extends Component {
  state = {
    activeTab: 'Strategy',
  }

  toggle = tab => {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
      })
    }
  }
  render() {
    return (
      <Section className="bg-light text-dark">
        <Nav tabs>
          {tabs.map(tab => (
            <NavItem key={tab.title}>
              <Tab
                background={tab.color}
                className={this.state.activeTab === tab.title ? 'active' : ''}
                onClick={() => {
                  this.toggle(tab.title)
                }}
              >
                <i className={`mr-2 ${tab.icon}`} />
                {tab.title}
              </Tab>
            </NavItem>
          ))}
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          {tabs.map(tab => (
            <TabPane tabId={tab.title} key={tab.title}>
              <p className="text-muted lead pt-4 px-5">{tab.description}</p>
            </TabPane>
          ))}
        </TabContent>
      </Section>
    )
  }
}

export default Consultancy
