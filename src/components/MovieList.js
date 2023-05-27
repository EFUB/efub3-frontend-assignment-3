// 8주차 피드백 반영
import { getNowplayingMovies, getPopularMovies, getImageUrl } from "../api/tmdb"
import useAxios from "../hooks/useAxios";
import styled from "styled-components";
import MovieItem from "../components/MovieItem";

// slick slider 라이브러리 사용
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { useSelector } from "react-redux";

const MovieList = ({ movieType }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: true,
        slidesToScroll: 5,
        slidesToShow: 5,
    };

    const selectAxios = () => {
        if (movieType === "nowplaying") {
            return getNowplayingMovies;
        } else if (movieType === "popular") {
            return getPopularMovies;
        }
    };

    const [loading, movies] = useAxios(selectAxios()());
    const isDarkMode = useSelector((state) => state.isDarkMode);

    return (
        <Wrapper>
            <StyledSlider {...settings} isDarkMode={isDarkMode}>
                    {/* loading이 true일 때 Loading... 텍스트 출력 */}
                    {loading ? (
                        <LoadingText>Loading...</LoadingText>
                    ) : (
                        movies && movies.results.map((movie) => {
                            return (
                                <MovieItem
                                    key={movie.id}
                                    id={movie.id}   // 영화 상세 정보 페이지를 위한 id
                                    title={movie.title}
                                    release_date={movie.release_date}
                                    poster_src={getImageUrl(movie.poster_path, 300)}
                                    vote_average={movie.vote_average}
                                />
                            );
                        })
                    )}
            </StyledSlider>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: calc(100% - 300px);
    margin: auto;
    padding: 120px 0;
`;

const StyledSlider = styled(Slider)`
    .slick-list {
        width: 90%;
        margin: auto;
        padding: 50px 0;
    }
    .slick-prev {
        z-index: 1;
        left: 30px;
    }
    .slick-next {
        right: 40px;
    }
    .slick-prev:before, .slick-next:before {
        font-size: 50px;
        opacity: 0.7;
        color: lightsteelblue;
        cursor: pointer;
    }

    // 다크모드에서 dots가 보이도록 수정하기 위해서 slick-dots css를 가져와서 수정
    .slick-dots {
        position: absolute;
        bottom: -25px;
        display: block;
        width: 100%;
        padding: 0;
        margin: 0;
        list-style: none;
        text-align: center;
    }
    .slick-dots li {
        position: relative;
        display: inline-block;
        width: 20px;
        height: 20px;
        margin: 0 5px;
        padding: 0;
        cursor: pointer;
    }
    .slick-dots li button {
        font-size: 0;
        line-height: 0;
        display: block;
        width: 20px;
        height: 20px;
        padding: 5px;
        cursor: pointer;
        color: transparent;
        border: 0;
        outline: none;
        background: transparent;
    }
    .slick-dots li button:before {
        font-family: 'slick';
        font-size: 6px;
        line-height: 20px;
        position: absolute;
        top: 0;
        left: 0;
        width: 20px;
        height: 20px;
        content: '•';
        text-align: center;
        opacity: .25;
        color: ${({isDarkMode}) => isDarkMode ? "white" : "black"}; // 수정 코드
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    .slick-dots li.slick-active button:before {
        opacity: .75;
        color: ${({isDarkMode}) => isDarkMode ? "white" : "black"}; // 수정 코드
    }
`;

const LoadingText = styled.p`
    font-size: 50px;
    text-align: center;
`;

export default MovieList;