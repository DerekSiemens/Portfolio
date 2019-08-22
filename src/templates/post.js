import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

import { Layout } from '../components/common'
/**
* Single post view (/:slug)
*
* This file renders a single post and loads all the content.
*
*/
const Post = ({ data }) => {
    const post = data.postPagesJson

    return (
            <>
                <Helmet>
                    { /*<style type="text/css">{`${post.codeinjection_styles}`}</style>*/}
                </Helmet>
                <Layout>
                    <div className="container">
                        <article className="content">
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
                        </article>
                    </div>
                </Layout>
            </>
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
        ghostPost(slug: { eq: $slug }) {
            ...GhostPostFields
        }
    postPagesJson(slug: { eq: $slug }) {
                slug
                title
                id
                html
    }
}
`
