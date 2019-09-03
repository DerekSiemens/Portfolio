import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, ContainerDiv, ArticleContent, Title } from '../components/common'
import { PostContent, PostBody, FeaturedImage } from '../components/common/Posts'
/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data }) => {
    const post = data.postPagesJson

    return (
        <Layout>
            <ContainerDiv>
                <ArticleContent>
                    { post.feature_image &&
                    <FeaturedImage src={ post.feature_image } alt={ post.title }/> }
                    <PostContent>
                        <Title>{post.title}</Title>
                        <PostBody
                            dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                    </PostContent>
                </ArticleContent>
            </ContainerDiv>
        </Layout>
    )
}

Post.propTypes = {
    data: PropTypes.shape({
        postPagesJson: PropTypes.shape({
            title: PropTypes.string,
            html: PropTypes.string,
            feature_image: PropTypes.string,
        }),
    }),
}

export default Post

export const postQuery = graphql`
    query($slug: String!) {
        postPagesJson(slug: { eq: $slug }) {
            slug
            title
            id
            html
            feature_image
    }
}
`
