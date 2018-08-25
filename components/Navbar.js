import React from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'

import Logo from '../static/img/brand.png'

class MyNavbar extends React.Component {
  constructor(props) {
    super(props)

    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false,
    }
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    })
  }
  render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md" fixed="top">
          <NavbarBrand href="/">
            <img
              src={Logo}
              className="img-fluid"
              style={{ maxHeight: '3em' }}
            />
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">
                  <i className="fas fa-home" />
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#" className="bg-primary rounded">
                  Startup Reactor
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Ventures</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Company
                </DropdownToggle>
                <DropdownMenu right className="text-center">
                  <DropdownItem>Ideaspace</DropdownItem>
                  <DropdownItem>About</DropdownItem>
                  <DropdownItem>Team</DropdownItem>
                  <DropdownItem>News</DropdownItem>
                  <DropdownItem>Blog</DropdownItem>
                  <DropdownItem>Careers</DropdownItem>
                  <DropdownItem>Contact</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default MyNavbar
