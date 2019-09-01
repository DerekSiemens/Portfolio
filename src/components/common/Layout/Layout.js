import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

// Styles
import '../../../styles/app.css'
import { NAVIGATION_ROUTES } from '../../../constants/NavItems'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

/**
* Main layout component
*
* The Layout component wraps around each page and template.
* It also provides the header, footer as well as the main
* styles, and meta data for each page.
*
*/
const DefaultLayout = ({ data, children, isHome }) => {
    const title = data.allHomePageJson.edges[0].node.title
    const description = data.allHomePageJson.edges[0].node.description

    return (
        <div className="viewport">
            <div className="viewport-top">
                {/* The main header section on top of the screen */}
                <Header data={NAVIGATION_ROUTES} title={title} description={description} isHome={isHome}/>
                <main className="site-main">
                    {/* All the main content gets inserted here, index.js, post.js */}
                    {children}
                </main>
            </div>
            <div className="viewport-bottom">
                {/* The footer at the very bottom of the screen */}
                <Footer data={NAVIGATION_ROUTES}/>

            </div>
        </div>
    )
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
    bodyClass: PropTypes.string,
    isHome: PropTypes.bool,
    data: PropTypes.shape({
        allHomePageJson: PropTypes.object.isRequired,
    }).isRequired,
}

const DefaultLayoutSettingsQuery = props => (
    <StaticQuery
        query={graphql`
            query GhostSettings {
                allHomePageJson {
                    edges {
                        node {
                         title
                         description
                         }
                    }
                }
            }
        `}
        render={data => <DefaultLayout data={data} {...props} />}
    />
)

export default DefaultLayoutSettingsQuery
