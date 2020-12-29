import { renderHook, act } from '@testing-library/react-hooks';
import { getNews } from '../api/client';
import { useFetch } from './useFetch';

describe('Hook useFetch Test', () => {
  it('Return default values', () => {
    const { result } = renderHook(() => useFetch(getNews));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  it('Get data', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(getNews));

    await waitForNextUpdate();

    const { data, loading, error } = result.current;
    expect(data.status).toEqual('OK');
    expect(loading).toBe(false);
    expect(error).toBe(null);
  });

  it('Catch error', async () => {
    const forceError = async () => {
      const response = await fetch('https://reqres.in/error/users?page=2');
      const data = await response.json();
      return data;
    };
    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(forceError)
    );

    await waitForNextUpdate();

    const { data, loading, error } = result.current;

    expect(data).toBe(null);
    expect(loading).toBe(false);
    expect(error).toEqual('Error');
  });
});
