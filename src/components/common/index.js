import styled from '@emotion/styled'

export { default as Layout } from './Layout/Layout'
export { default as PostCard } from './Posts/PostCard/PostCard'
export { default as Pagination } from './Pagination/Pagination'
export { default as Navigation } from './Navigation/Navigation'

export const ContainerDiv = styled.div`
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 4vw;
`
export const ArticleContent = styled.article`
    margin: 0 auto;
    font-size: 2rem;
    line-height: 1.7em;
`

export const Title = styled.h1`
    margin: 0 0 0.8em;
    font-size: 5rem;
    @media (max-width: 500px) {
        margin: 0.8em 0;
        font-size: 3.4rem;
    }

`
