import React from 'react';
import { shallow } from 'enzyme';
import { Input } from '../Input/Input';
import { ContactForm } from './ContactForm';
import {
  emailValidation,
  fieldRequired,
  phoneValidation
} from '../../utils/validations';

describe('Contact form Tests', () => {
  const renderInput = args => {
    return shallow(<Input {...args} />).find('TextField');
  };

  it('Component snapshot', () => {
    const component = shallow(<ContactForm />);
    expect(component).toMatchSnapshot();
  });

  it('TextField is required', () => {
    const props = {
      name: 'firstName',
      label: 'First Name',
      value: '',
      onChange: jest.fn()
    };

    const TextField = renderInput(props);
    const { value } = TextField.props();
    expect(fieldRequired(value, props.label)).toEqual(
      `${props.label} is required`
    );
  });

  it('Email is valid (Format)', () => {
    const props = {
      name: 'email',
      value: '',
      onChange: jest.fn()
    };

    const TextField = renderInput(props);
    expect(emailValidation(TextField.prop('value'))).toEqual(
      'Enter a valid email'
    );

    expect(emailValidation('email@domain.com')).toBe(null);
  });

  it('Phone is valid (Format)', () => {
    const props = {
      name: 'phone',
      value: '',
      onChange: jest.fn()
    };
    const TextField = renderInput(props);
    expect(phoneValidation(TextField.prop('value'))).toEqual(
      'Enter a valid phone'
    );
  });

  it('Blur field', () => {
    const validatorFunct = jest.fn();
    const TextField = renderInput({ validator: validatorFunct });
    TextField.simulate('blur');
    expect(validatorFunct).toHaveBeenCalled();
  });

  it('Open Modal when form is submitted', () => {
    const component = shallow(<ContactForm />);
    component.simulate('submit', { preventDefault() {} });
    const modal = component.find('Modal');
    expect(modal.prop('showProp')).toBe(true);
  });
});
