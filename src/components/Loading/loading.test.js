import { shallow } from 'enzyme';
import { Loading } from './Loading';

describe('Loading Component Test', () => {
  it('Loading component snapshot ', () => {
    const component = shallow(<Loading />);
    expect(component).toMatchSnapshot();
  });
});
