import { shallow } from 'enzyme';
import { News } from './News';

describe('News section Test', () => {
  it('News component snapshot', () => {
    const component = shallow(<News />);
    expect(component).toMatchSnapshot();
  });
});
