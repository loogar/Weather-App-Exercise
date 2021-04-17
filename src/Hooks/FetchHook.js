import {useState, useEffect} from 'react';

export const useFetchHook = (url, options) => {
  const [isLoading, setIsLoading] = useState(false); //initialize loading state
  const [value, setValue] = useState(); //initialize value state
  const [error, setError] = useState(); //initialize error state

  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((response) => {
        setIsLoading(false);
        if (!response.ok) {
          throw Error(response.statusText); //error status
        }
        return response.json();
      })
      .then((data) => setValue(data)) // setting value
      .catch((err) => setError(err));
  }, [url, options]);

  return [isLoading, value, error];
};
