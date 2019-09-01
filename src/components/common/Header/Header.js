import React from 'react'
import PropTypes from 'prop-types'
import { SiteHeader, SiteMast, SiteMastIcon } from '.'
import Navigation from '../Navigation/Navigation'
import { ContainerDiv } from '..'

const Header = ({ data, title, description, isHome }) => (

    <SiteHeader>
        <ContainerDiv>
            <SiteMast>
                <SiteMastIcon>
                    <a href={`https://github.com/DerekSgov/Portfolio`} className="site-nav-item">
                        <img className="site-nav-icon" src="\images\GitHub-Mark-Light-64px.png" alt="GitHub"/>
                    </a>
                </SiteMastIcon>
            </SiteMast>
            { isHome ?
                <div className="site-banner">
                    <h1 className="site-banner-title">{title}</h1>
                    <p className="site-banner-desc">{description}</p>
                </div> :
                null}
            <Navigation data={data}/>
        </ContainerDiv>
    </SiteHeader>
)

Header.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isHome: PropTypes.bool,
}

export default Header
