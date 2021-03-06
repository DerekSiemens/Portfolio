import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, Pagination, ContainerDiv } from '../components/common'
import PostFeed from '../components/common/Posts/PostFeed'

/**
* Main index page (home page)
*
* Loads all posts from Ghost and uses pagination to navigate through them.
* The number of posts that should appear per page can be setup
* in /utils/siteConfig.js under `postsPerPage`.
*
*/
const Projects = ({ data, pageContext }) => {
    const posts = data.allCardsJson.edges[0].node.cards.filter(card => card.type === `Project`)

    return (
        <Layout isHome={false}>
            <ContainerDiv>
                <PostFeed posts={posts}/>
                <Pagination pageContext={pageContext} />
            </ContainerDiv>
        </Layout>
    )
}

Projects.propTypes = {
    data: PropTypes.shape({
        allCardsJson: PropTypes.object.isRequired,
    }).isRequired,
    location: PropTypes.shape({
        pathname: PropTypes.string.isRequired,
    }).isRequired,
    pageContext: PropTypes.object,
}

export default Projects

// This page query loads all posts sorted descending by published date
// The `limit` and `skip` values are used for pagination
export const pageQuery = graphql`
  query ProjectsPageQuery {
    allCardsJson {
        edges {
            node {
                cards {
                    title
                    feature_image
                    excerpt
                    slug
                    type
                    id
                }
            }
        }
    }
  }
`