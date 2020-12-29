import { shallow } from 'enzyme';
import { Alert } from './Alert';

const component = shallow(<Alert />);

describe('Alert Tests', () => {
  it('Dissmisible on click botton', () => {
    const props = component.children().props();
    props.onDismiss();
    expect(component.props().children).toBe(false);
  });
});
