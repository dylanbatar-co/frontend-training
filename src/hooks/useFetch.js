import { useState, useEffect, useRef } from 'react';

export const useFetch = func => {
  const [state, setState] = useState({
    data: null,
    loading: true,
    error: null
  });
  const isMount = useRef(true);

  useEffect(() => {
    return () => {
      isMount.current = false;
    };
  }, []);

  useEffect(() => {
    setState({ data: null, loading: true, error: null });

    func()
      .then(data => {
        if (isMount.current) {
          setState({
            loading: false,
            error: null,
            data
          });
        }
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
