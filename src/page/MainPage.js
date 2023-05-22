import PopularMovieList from "../components/PopularMovieList";
import MovieDetail from "../components/MovieDetail";
import { Routes, Route } from "react-router-dom";
import NowplayingMovieList from "../components/NowplayingMovieList";

const MainPage = () => {
    
    return (
        <>
            <Routes>
                <Route path="/" Component={PopularMovieList}/>
                <Route path="/detail/:id" Component={MovieDetail}/>
                <Route path="/nowplaying" Component={NowplayingMovieList} />
            </Routes>
        </>
    );
}

export default MainPage;