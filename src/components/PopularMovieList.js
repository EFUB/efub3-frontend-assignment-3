import MovieItem from "./MovieItem";
import styled from "styled-components";
import useAxios from "../hooks/useAxios";
import { getPopularMovies, getImageUrl } from "../api/tmdb";

// slick slider 라이브러리 사용
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularMovieList = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        arrows: true,
        slidesToScroll: 5,
        slidesToShow: 5,
    };
    
    // axios를 이용해 현재 인기있는 영화 배열을 가져온다.
    const [loading, movies] = useAxios(getPopularMovies());

    return (
        <Wrapper>
            <StyledSlider {...settings}>
                    {/* loading이 true일 때 Loading... 텍스트 출력 */}
                    {loading ? (
                        <LoadingText>Loading...</LoadingText>
                    ) : (
                        movies && movies.results.map((movie) => {
                            return (
                                <MovieItem
                                    key={movie.id}
                                    id={movie.id}
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
`;

const LoadingText = styled.p`
    font-size: 50px;
    text-align: center;
`;

export default PopularMovieList;