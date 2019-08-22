import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import { Layout, PostCard, Pagination } from '../components/common'

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
        <>
            <Layout isHome={true}>
                <div className="container">
                    <section className="post-feed">
                        {posts.map(card => (
                            // ADD BACK IN KEY={ID}
                            <PostCard key={card.id} post={card} />
                        ))}
                    </section>
                    <Pagination pageContext={pageContext} />
                </div>
            </Layout>
        </>
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