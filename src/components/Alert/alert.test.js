import { shallow } from 'enzyme';
import { Alert } from './Alert';

const component = shallow(<Alert />);

describe('Alert Tests', () => {
  it('It should hide the alert when clicked', () => {
    const closeButton = jest.fn();
    component.find('Alert').simulate('dismiss', closeButton());
    expect(closeButton).toHaveBeenCalled();
  });
});
