import { useState, useEffect } from 'react';

type IFetchOptions = {};

type IUseFetch = {
  url: string;
  options?: IFetchOptions;
  authenticated?: Boolean;
};

const BASE_URL = process.env.REACT_APP_API_BASE_URL;
const OPTIONS = {};

export const useFetch = ({
  url,
  options = OPTIONS,
  authenticated = false
}: IUseFetch) => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(BASE_URL + url, { ...OPTIONS, ...options });
        const json = await res.json();
        setResponse(json);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);

  return { response, error, isLoading };
};
