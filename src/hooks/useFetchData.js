import { useEffect, useState } from "react";

export default function useQuery(fetchFunc) {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState();
  const [data, setData] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const { data: fetchedData } = await fetchFunc();
        setData(fetchedData);
        setLoading(false);
      } catch (e) {
        setLoading(false);
        setError(e.response.data.error);
      }
    };
    getData();
  }, [fetchFunc]);

  return {
    data,
    isLoading,
    error,
  };
}
