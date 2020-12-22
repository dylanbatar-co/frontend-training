import React from 'react';
import Navbar from 'emerald-ui/lib/Navbar';
import Nav from 'emerald-ui/lib/Nav';
import DropdownButton from 'emerald-ui/lib/DropdownButton';
import DropdownItem from 'emerald-ui/lib/DropdownItem';
import Icon from 'emerald-ui/lib/Icon';
import Avatar from 'emerald-ui/lib/Avatar';

export const Header = () => {
  return (
    <Navbar breakAt="lg" fixedAtTop>
      <Navbar.Brand>
        <h2>News</h2>
      </Navbar.Brand>
      <Nav grow collapsible>
        <a href="#foo">Link 1</a>
        <a href="#foo">Link 2</a>
        <a href="#foo">Link 3</a>
        <DropdownButton title="Dropdown" id="dd1">
          <DropdownItem eventKey="1">Action</DropdownItem>
          <DropdownItem eventKey="2">Another action</DropdownItem>
          <DropdownItem eventKey="3" active>
            Active Item
          </DropdownItem>
          <DropdownItem separator />
          <DropdownItem eventKey="4">Separated link</DropdownItem>
        </DropdownButton>
      </Nav>
      <Nav collapsible>
        <a href="#foo">
          <Icon name="email" />
        </a>
        <DropdownButton
          noCaret
          fromRight
          id="dd2"
          title={<Avatar title="JS" />}
        >
          <DropdownItem eventKey="1">Action</DropdownItem>
          <DropdownItem eventKey="2">Another action</DropdownItem>
          <DropdownItem eventKey="3" active>
            Active Item
          </DropdownItem>
          <DropdownItem separator />
          <DropdownItem eventKey="4">Separated link</DropdownItem>
        </DropdownButton>
      </Nav>
    </Navbar>
  );
};
