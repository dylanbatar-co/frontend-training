import React from 'react';
import Navbar from 'emerald-ui/lib/Navbar';
import Nav from 'emerald-ui/lib/Nav';
import DropdownButton from 'emerald-ui/lib/DropdownButton';
import DropdownItem from 'emerald-ui/lib/DropdownItem';
import Avatar from 'emerald-ui/lib/Avatar';

export const Header = () => {
  const dropdownItems = [
    'Sport',
    'Entertainment',
    'Economics',
    'Technology',
    'Games'
  ];

  return (
    <Navbar breakAt="lg" fixedAtTop>
      <Navbar.Brand>
        <h2>News</h2>
      </Navbar.Brand>
      <Nav grow collapsible>
        <RenderDropdownList listItem={dropdownItems} titleList="section" />
        <a href="#editorial">Editorial</a>
        <a href="#contactus">Contact Us</a>
      </Nav>
      <Nav>
        <a href="#foo">
          <Avatar title="JS" />
        </a>
      </Nav>
    </Navbar>
  );
};

const RenderDropdownList = ({ listItem = [], titleList = '' }) => {
  return (
    <DropdownButton title={titleList} id="dd1">
      {listItem.map((item, idx) => (
        <DropdownItem key={idx} eventKey={idx}>
          {item}
        </DropdownItem>
      ))}
    </DropdownButton>
  );
};
