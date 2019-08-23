import React from 'react'
import PropTypes from 'prop-types'
import { PostCardLink, PostCardImage, PostCardTitle, PostCardExcerpt } from '.'

const PostCard = ({ post }) => {
    const url = `${post.slug}`

    return (
        <PostCardLink to={url}>
            {post.feature_image &&
                    <PostCardImage style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></PostCardImage>}
            <PostCardTitle >{post.title}</PostCardTitle>
            <PostCardExcerpt >{post.excerpt}</PostCardExcerpt>
        </PostCardLink>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        slug: PropTypes.string.isRequired,
        excerpt: PropTypes.string.isRequired,
    }).isRequired,
}

export default PostCard
