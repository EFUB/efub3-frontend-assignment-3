import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieListItem = (props) => {
    const { id, title, release_date, poster_src, vote_average } = props;

    return (
        <Wrapper>
            <Link
                to={`/detail/${id}`}
                state={{ id: id }}
                className="link"
            >
                <PosterImg src={poster_src} alt="movie poster" />   {/*  포스터 사진 */}
                <TextBox>
                    <TitleText >{title}</TitleText> {/* 영화 제목 */}
                    <ReleaseText >개봉일 : {release_date}</ReleaseText> {/* 개봉일 */}
                    <VoteAvg >⭐ {vote_average}</VoteAvg>   {/* 별점 */}
                </TextBox>
            </Link>
        </Wrapper>
    );
}

const Wrapper = styled.div`
    margin: auto;
    width: 150px;
    height: auto;
    text-decoration: none;
    color: black;
    padding: 2% 5%;
    :hover {
        transform: scale(1.1);
    }
    .link {
        color: black;
        text-decoration: none;
    }
    cursor: pointer;
`;

const TitleText = styled.p`
    font-size: 20px;
    flex: 1;
    margin: 0;
`;

const TextBox = styled.div`
    margin: 5px 0;
`;

const ReleaseText = styled.p`
    font-size: 15px;
    margin: 2px 0;
`;

const VoteAvg = styled.p`
    font-size: 15px;
    margin: 2px 0;
`;

const PosterImg = styled.img`
    object-fit: cover;
    height: 300px;
    width: auto;
`;

export default MovieListItem;