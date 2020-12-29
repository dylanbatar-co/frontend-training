import { shallow } from 'enzyme';
import { NewsApp } from './NewsApp';

describe('Main app', () => {
  it('NewsApp component snapshot', () => {
    const component = shallow(<NewsApp />);
    expect(component).toMatchSnapshot();
  });
});
