import { useEffect, useState } from "react";

const baseUrl = process.env.REACT_APP_BASE_URL;

/**
 * Hook used to extract data from backendApi to feed the dashboard.
 * @param {string} url
 * @returns {undefined|Object}
 */
export function useBackendApi(endpoint) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    async function fetchData() {
      try {
        const url = `${baseUrl}/${endpoint}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Not Found");
        }
        const data = await response.json();

        setData(data);
      } catch (err) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }
    fetchData();
  }, [endpoint]);

  console.log("ici", data);

  return { data, isLoading, error };
}

// function getUserInfos(endpoint) {
//   const { data, isLoading, error } = useBackendApi(endpoint);
// }
