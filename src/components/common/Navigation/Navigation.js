import React from 'react'
import PropTypes from 'prop-types'
import { NavigationNav, LeftNavDiv, RightNavDiv, NavButton, NavItem } from '.'

const Navigation = ({ data }) => (
    <NavigationNav>
        <LeftNavDiv>
            {data.map(navItem => (
                <NavItem to={navItem.to} key={navItem.text}>{navItem.text}</NavItem>
            ))}
        </LeftNavDiv>
        <RightNavDiv>
            <NavButton to="/Contact">Contact</NavButton>
        </RightNavDiv>
    </NavigationNav>
)

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
}

export default Navigation
