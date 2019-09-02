import React from 'react'
import PropTypes from 'prop-types'
import { SiteHeader, SiteMast, SiteMastIcon, GitHubLogo } from '.'
import Navigation from '../Navigation/Navigation'
import { ContainerDiv } from '..'
import { NavItem } from '../Navigation'
import SiteBanner from '../SiteBanner/SiteBanner'

const Header = ({ data, title, description, isHome }) => (
    <SiteHeader>
        <ContainerDiv>
            <SiteMast>
                <SiteMastIcon>
                    <NavItem href={`https://github.com/DerekSgov/Portfolio`}>
                        <GitHubLogo src="\images\GitHub-Mark-Light-64px.png" alt="GitHub"/>
                    </NavItem>
                </SiteMastIcon>
            </SiteMast>
            { isHome && <SiteBanner title={title} description={description}/>}
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
