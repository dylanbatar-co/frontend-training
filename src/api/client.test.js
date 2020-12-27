import { getNews } from './client';

describe('Client API', () => {
  it('Fetch return data', async () => {
    const data = await getNews();
    expect(data.status).toEqual('OK');
    expect(data.response.docs.length).toBeGreaterThan(0);
  });
});
