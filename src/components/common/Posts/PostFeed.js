import React from 'react'
import styled from '@emotion/styled'
import PostCard from './PostCard/PostCard'
import PropTypes from 'prop-types'

export const PostSection = styled.section`
    display: grid;
    justify-content: space-between;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 980px) {
        grid-template-columns: 1fr 1fr;
    }
    @media (max-width: 680px) {
        grid-template-columns: 1fr;
    }
`

const PostFeed = ({ posts }) => (
    <PostSection>
        {posts.map(card => (
            // ADD BACK IN KEY={ID}
            <PostCard key={card.id} post={card} />
        ))}
    </PostSection>

)

PostFeed.propTypes = {
    posts: PropTypes.array.isRequired,
}

export default PostFeed