import { shallow } from 'enzyme';
import { Modal } from './Modal';

describe('Modals Test', () => {
  let props = {
    email: 'dylanbatar2@gmail.com',
    firstName: 'dylan',
    lastName: 'batista',
    message: 'message test',
    phone: '3008582037',
    news: false
  };
  const toggleModal = jest.fn();
  const component = shallow(
    <Modal data={{ ...props }} toggleModalProp={toggleModal} />
  );

  it('Message when subscription is enable', () => {
    const component = shallow(
      <Modal data={{ ...props, news: true }} toggleModalProp={toggleModal} />
    );
    const subcritionMessage = component.find('p').at(1).text();
    expect(subcritionMessage).toEqual('Enabled breakings news and promotions');
  });

  it('Message when subscription is dissable', () => {
    const subcritionMessage = component.find('p').at(1).text();
    expect(subcritionMessage).toEqual(
      'Dissabled breakings news and promotions'
    );
  });

  it('Close modal', () => {
    const cancelButton = component.find('Button');
    cancelButton.simulate('click');
    expect(toggleModal).toHaveBeenCalledTimes(1);
  });
});
