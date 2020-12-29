import { shallow } from 'enzyme';
import { CardNews } from './CardNews';

describe('Card Component Tests', () => {
  it('Show placeholder image', () => {
    const props = {
      multimedia: [],
      headline: { main: 'News Title' }
    };
    const component = shallow(<CardNews {...props} />);
    const imageURL = component.find('img').prop('src');
    expect(imageURL).toEqual('/assets/img/noImage.png');
  });
});
