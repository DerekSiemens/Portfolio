import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

/**
* Navigation component
*
* The Navigation component takes an array of your Ghost
* navigation property that is fetched from the settings.
* It differentiates between absolute (external) and relative link (internal).
* You can pass it a custom class for your own styles, but it will always fallback
* to a `site-nav-item` class.
*
*/
const Navigation = ({ data, navClass }) => (
    <>
        {data.map((navItem) => {
            if (navItem.to.match(/^\s?http(s?)/gi)) {
                return <a className={navClass} href={navItem.to} key={navItem.text} target="_blank" rel="noopener noreferrer">{navItem.text}</a>
            } else {
                return <Link className={navClass} to={navItem.to} key={navItem.text}>{navItem.text}</Link>
            }
        })}
    </>
)

Navigation.defaultProps = {
    navClass: `site-nav-item`,
}

Navigation.propTypes = {
    data: PropTypes.arrayOf(
        PropTypes.shape({
            text: PropTypes.string.isRequired,
            to: PropTypes.string.isRequired,
        }).isRequired,
    ).isRequired,
    navClass: PropTypes.string,
}

export default Navigation
