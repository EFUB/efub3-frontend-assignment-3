import { useEffect, useState } from "react";
import axios from "axios";

function useAxios(url) {
    // axios를 사용해서 데이터를 가져오는 custom hook
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMoives = async () => {
            setLoading(true);
            try {
                const response = await axios.get(url);
                setMovies(response.data);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        }
        getMoives();
    }, []);

    return [loading, movies];
}

export default useAxios;