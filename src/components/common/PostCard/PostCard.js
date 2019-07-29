import React from 'react'
import PropTypes from 'prop-types'
import { PostCardLink, PostCardImage, PostCardTitle, PostCardExcerpt } from '.';

const PostCard = ({ post }) => {
    const url = `/${post.slug}/`

    return (
        <PostCardLink to={url}>
            {post.feature_image &&
                    <PostCardImage className="post-card-image" style={{
                        backgroundImage: `url(${post.feature_image})` ,
                    }}></PostCardImage>}
            <PostCardTitle className="post-card-title">{post.title}</PostCardTitle>
            <PostCardExcerpt className="post-card-excerpt">{post.excerpt}</PostCardExcerpt>
        </PostCardLink>
    )
}

PostCard.propTypes = {
    post: PropTypes.shape({
        title: PropTypes.string.isRequired,
        feature_image: PropTypes.string,
        featured: PropTypes.bool,
        tags: PropTypes.arrayOf(
            PropTypes.shape({
                name: PropTypes.string,
            })
        ),
        excerpt: PropTypes.string.isRequired,
    }).isRequired,
}

export default PostCard
