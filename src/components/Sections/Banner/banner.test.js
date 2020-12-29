import { shallow } from 'enzyme';
import { Banner } from './Banner';

describe('Banner section', () => {
  it('Section snapshot', () => {
    const component = shallow(<Banner />);
    expect(component).toMatchSnapshot();
  });
});
