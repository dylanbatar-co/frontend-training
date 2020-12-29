import { shallow } from 'enzyme';
import { ContactUs } from './ContactUs';

describe('Contact section Test', () => {
  it('ContactUs component snapshot', () => {
    const component = shallow(<ContactUs />);
    expect(component).toMatchSnapshot();
  });
});
