import { renderHook } from '@testing-library/react-hooks';
import { useFetch } from './useFetch';

const getNews = () => {
  const mockArticles = [
    {
      headline: {
        main:
          'Barr Says C.I.A. ‘Stayed in Its Lane’ in Examining Russian Election Interference'
      },
      lead_paragraph:
        'WASHINGTON — The Justice Department’s examination of the investigations into Russia’s interference in the 2016 election has cleared the C.I.A. of suspicions that it targeted President Trump and his associates, Attorney General William P. Barr said in an interview published on Friday.',
      multimedia: [
        {
          url:
            'images/2020/12/18/us/politics/18dc-barr/  merlin_177479403_ed15d9a8-22c4-4f2c-959a-734c01fee7d0-articleLarge.jpg'
        }
      ],
      web_url:
        'https://www.nytimes.com/2020/12/18/us/politics/william-barr-cia-russia-investigation.html',
      _id: 'nyt://article/bab6b531-2853-5f79-ac2e-5434a70606c7'
    },

    {
      headline: {
        main:
          'Russian Hackers Broke Into Federal Agencies, U.S. Officials Suspect'
      },
      lead_paragraph:
        'The Trump administration acknowledged on Sunday that hackers acting on behalf of a foreign government — almost certainly a Russian intelligence agency, according to federal and private experts — broke into a range of key government networks, including in the Treasury and Commerce Departments, and had free access to their email systems.',
      multimedia: [
        {
          url:
            'images/2020/12/13/us/politics/13dc-hack/merlin_181209474_37c80834-47aa-4352-8f35-9532200f375b-popup.jpg'
        }
      ],
      web_url:
        'https://www.nytimes.com/2020/12/13/us/politics/russian-hackers-us-government-treasury-commerce.html',
      _id: 'nyt://article/52e9bc8f-482a-5572-b565-9fefb066eca0'
    }
  ];

  return new Promise((resolve, reject) => {
    setTimeout(function () {
      resolve(mockArticles);
      reject(null);
    }, 250);
  });
};

describe('Hook useFetch Test', () => {
  it('It should return default values of hook', () => {
    const { result } = renderHook(() => useFetch(getNews));
    const { data, loading, error } = result.current;
    expect(data).toBe(null);
    expect(loading).toBe(true);
    expect(error).toBe(null);
  });

  it('It should return data of request', async () => {
    const { result, waitForNextUpdate } = renderHook(() => useFetch(getNews));
    await waitForNextUpdate();
    const { data, loading, error } = result.current;

    expect(data.length).toBeGreaterThan(0);
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
