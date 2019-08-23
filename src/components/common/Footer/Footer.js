import React from 'react'
import PropTypes from 'prop-types'
import { RightFooterNavDiv, SiteFooter } from '.'
import { NavItem } from '../Navigation'

const Footer = ({ data }) => (
    <SiteFooter>
        <div className="site-foot-nav container">
            <RightFooterNavDiv>
                {data.map(navItem => (<NavItem className={`site-nav-item`} to={navItem.to} key={navItem.text}>{navItem.text}</NavItem>
                ))}
            </RightFooterNavDiv>
        </div>
    </SiteFooter>
)

Footer.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

export default Footer