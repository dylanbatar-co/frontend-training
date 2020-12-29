import { shallow } from 'enzyme';
import { Header } from './Header';

const component = shallow(<Header />);

describe('Navbar Tests', () => {
  it('Snapshot navbar', () => {
    expect(component).toMatchSnapshot();
  });

  it('Navbar is fixed-at-top', () => {
    expect(component.getElement().props.fixedAtTop).toBe(true);
  });
});

describe('DropDown Tests', () => {
  it('Should have at least 5 items', () => {
    const NavContainer = component.find('RenderDropdownList');
    const listItems = NavContainer.props().listItem.length;
    expect(listItems).toBeGreaterThanOrEqual(5);
  });

  it('DropDownItem text should be same dropdownItems ', () => {
    const dropdownItems = [
      'Sport',
      'Entertainment',
      'Economics',
      'Technology',
      'Games'
    ];

    const DropdownItem = component
      .find('RenderDropdownList')
      .dive()
      .find('DropdownItem')
      .children()
      .map(el => el.text());

    DropdownItem.forEach((v, i) => expect(v).toEqual(dropdownItems[i]));
  });
});
