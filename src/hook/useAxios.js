import { useState, useEffect } from "react";
import axios from "axios";

//api를 가져오는 커스텀 훅인 useAxios.
//useEffect에서 의존성 배열을 url로 주어 url바뀔떄마다
//getMovies가 한번만 실행되도록 하였습니다.
//완료되면 각각 data,loaing,error상태를 배열로 반환.
const useAxios = (initialurl) => {
  const [url, setUrl] = useState(initialurl);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    getMovies();
  }, [url]);

  const getMovies = async () => {
    try {
      const response = await axios.get(url);
      setData(response.data);
      setLoading(false);
    } catch (error) {
      setError(true);
      setLoading(false);
    }
  };

  return [data, loading, error];
};

export default useAxios;
