import { useState, useEffect } from 'react';

export const useFetch = func => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    func()
      .then(data => {
        setState({
          loading: false,
          error: null,
          data
        });
      })
      .catch(() => {
        setState({
          data: null,
          loading: false,
          error: 'Error'
        });
      });
  }, [func]);

  return state;
};
