import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, ContainerDiv, ArticleContent } from '../components/common'
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
                    { /*post.feature_image ?
                                <figure className="post-feature-image">
                                    <img src={ post.feature_image } alt={ post.title } />
                                </figure> : null */}
                    <section className="post-full-content">
                        <h1 className="content-title">{post.title}</h1>

                        {/* The main post content */ }
                        <section
                            className="content-body load-external-scripts"
                            dangerouslySetInnerHTML={{ __html: post.html }}
                        />
                    </section>
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
    }
}
`
