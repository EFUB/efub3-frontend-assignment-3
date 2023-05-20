import { useLocation } from "react-router-dom";
import useAxios from "../hooks/useAxios";
import { getDetail, getImageUrl } from "../api/tmdb";
import styled from "styled-components";

const MovieDetail = () => {
    const location = useLocation();    
    const { id } = location.state;  // link에서 받아온 state (movie.id)
    
    // axios를 이용해 영화 상세 정보를 가져온다.
    const [loading, movie] = useAxios(getDetail(id));

    return (
        <>
            <Wrapper>
                {loading ? (
                    <Text>Loading</Text>
                ) : (
                    <Poster // 영화 포스터
                        src={getImageUrl(movie.poster_path, 500)}
                        alt="movie poster" 
                    />
                )}
                <InfoBox>
                    <TitleText>{movie.title}</TitleText>    {/* 영화 제목 */}
                    <OutlineText>개요</OutlineText>
                        <OutlineBox>
                            <OutlineBox>
                                {loading ? (
                                    <Text>Loading...</Text>
                                ) : (
                                    (movie && movie.genres.map((genre) => {
                                        return (
                                            <Text key={genre.id}>{genre.name}&nbsp;&nbsp;</Text>    // 장르
                                        )
                                    }))
                                )}
                            </OutlineBox>
                            <SpanLine></SpanLine>
                            <OutlineBox>
                                {loading ? (
                                    <Text>Loading...</Text>
                                ) : (
                                    (movie && movie.production_countries
                                        .map((country) => {
                                        return (
                                            <Text key={country.iso_3166_1}>{country.iso_3166_1}&nbsp;&nbsp;</Text>  // 제작 국가
                                        )
                                    }))
                                )}
                            </OutlineBox>
                            <SpanLine></SpanLine>
                            <Text>{movie.runtime}분</Text>  {/* 상영 시간 */}
                        </OutlineBox>
                    <OutlineText>개봉</OutlineText>
                    <Text>{movie.release_date}</Text>   {/* 개봉일 */}
                    <OutlineText>평점</OutlineText>
                    <Text>&nbsp;{movie.vote_average}</Text> {/* 평점 */}
                    <OutlineText>소개</OutlineText>
                    <Text>{movie.overview}</Text>   {/* 줄거리 소개 */}
                </InfoBox>
            </Wrapper>
        </>
    );
    

}

const Wrapper = styled.div`
    width: 70%;
    height: auto;
    margin: 100px auto;
    display: flex;
    justify-content: center;
`;
const InfoBox = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 1%;
    background-color: aliceblue;
    padding: 1rem 1.5rem;
`;

const Poster = styled.img`
    object-fit: cover;
    height: 600px;
    width: auto;
`;

const TitleText = styled.h3`
    font-size: 2.5rem;
    margin: 0 0 1.5rem 0;
`;
const OutlineBox = styled.div`
    display: flex;
`;
const OutlineText = styled.h3`
    margin: 0;
    font-size: 1.2rem;
    margin-bottom: -5px;
    line-height: 2rem;
    letter-spacing: -0.16px;
`;

const Text = styled.p`
    font-size: 1rem;
    line-height: 2.1rem;
    margin-top: 0.5rem;
`;

const SpanLine = styled.span`
    display: inline-block;
    width: 1px;
    height: 18px;
    margin: 17px 8px 0 -1px;
    background-color: gray;
    vertical-align: middle;

`;

export default MovieDetail;