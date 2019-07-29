import { Link } from 'gatsby'
import styled from '@emotion/styled'

export const PostCardLink = styled(Link)`
    color: inherit;
    text-decoration: none;
    padding-bottom: 10px;
    :hover {
        text-decoration: none;
        position: relative; 
        top: -5px;
    }
`
export const PostCardImage = styled.div`
    margin: 0 0 10px 0;
    width: auto;
    height: 200px;
    background: #5B7A81 no-repeat center center;
    background-size: cover;
`
export const PostCardTitle = styled.h2`
    margin: 0 0 10px 0;
    padding: 0;
`
export const PostCardExcerpt = styled.section`
    font-size: 1.6rem;
    line-height: 1.55em;
`
