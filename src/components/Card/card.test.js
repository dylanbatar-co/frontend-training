import { shallow } from 'enzyme';
import { CardNews } from './CardNews';

describe('Card Component Tests', () => {
  const props = {
    multimedia: [],
    headline: { main: 'News Title' }
  };
  const component = shallow(<CardNews {...props} />);
  it('It should show placeholder image', () => {
    const imageURL = component.find('img').prop('src');
    expect(imageURL).toEqual('/assets/img/noImage.png');
  });

  it('It should open a new tab when clicked', () => {
    window.open = jest.fn();
    component.simulate('click');
    expect(window.open).toHaveBeenCalled();
  });
});
