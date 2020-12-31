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
  it('Should be at least 5 DropdownItem', () => {
    const DropdownItem = component
      .find('RenderDropdownList')
      .dive()
      .find('DropdownItem');
    expect(DropdownItem.length).toBeGreaterThanOrEqual(5);
  });
});
