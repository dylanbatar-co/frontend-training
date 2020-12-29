import { act, renderHook } from '@testing-library/react-hooks';
import { useForm } from './useForm';

describe('Hook useForm Test', () => {
  const initialValue = {
    name: 'dylan',
    terms: false
  };

  it('Change Input value', () => {
    const { result } = renderHook(() => useForm(initialValue));
    const [, handlerInput] = result.current;

    act(() => {
      handlerInput({ target: { name: 'name', value: 'dylanbatar' } });
    });

    const [values] = result.current;

    expect(values.name).toEqual('dylanbatar');
  });

  it('Change CheckBox value', () => {
    const { result } = renderHook(() => useForm(initialValue));
    const [value, , handlerChange] = result.current;

    act(() => {
      handlerChange({ target: { name: 'terms', checked: !value.terms } });
    });

    const [values] = result.current;
    expect(values.terms).toBe(true);
  });

  it('Reset Form', () => {
    const { result } = renderHook(() => useForm(initialValue));
    const [, , , reset] = result.current;

    act(() => {
      reset(initialValue);
    });

    const [values] = result.current;

    expect(values).toBe(initialValue);
  });
});
