import { useState, useEffect } from "react";
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

axios.defaults.baseURL = "http://localhost:3001/";

export const useAxios = (axiosParams: AxiosRequestConfig) => {
  const [response, setResponse] = useState<AxiosResponse>();
  const [error, setError] = useState<AxiosError<any, any> | undefined | unknown>();
  const [loading, setLoading] = useState(true);

  const fetchData = async (params: AxiosRequestConfig) => {
    try {
      const response = await axios.request(params);
      setResponse(response);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};
