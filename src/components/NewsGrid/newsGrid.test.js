import { shallow } from 'enzyme';
import { ConditionalRender, NewsGrid, RenderListCard } from './NewsGrid';

describe('Conditional Render News Grid Component', () => {
  it('Show Loading components when loading is true', () => {
    const component = shallow(<ConditionalRender />);
    const loadingComponent = component.find('Loading');
    expect(loadingComponent.length).toBeGreaterThanOrEqual(4);
  });

  it('Show error message when error prop is true', () => {
    const component = shallow(
      <ConditionalRender loading={false} error={true} />
    );
    const errorComponent = component.find('p').text();
    expect(errorComponent).toEqual('error');
  });

  it('Should Cards when loading is true', () => {
    const wrapper = shallow(
      <RenderListCard list={[{ _id: 1 }]} loading={false} error={false} />
    );
    expect(wrapper.children().length).toBe(1);
  });

  it('Not Render List Card', () => {
    const wrapper = shallow(<RenderListCard loading={true} error={true} />);
    expect(wrapper.children().length).toBe(0);
  });
});

describe('Button events', () => {
  let wrapper = shallow(<NewsGrid />);

  it('Click more data', () => {
    let limit = 4;
    const dataLimit = 8;
    const incrementLimit = jest.fn(() => (limit += 4));
    const button = wrapper.find('Button');
    button.simulate('click', incrementLimit());
    expect(limit).toBeGreaterThanOrEqual(dataLimit);
  });
});
