import React from 'react'
import PropTypes from 'prop-types'
import { Banner, BannerTitle, BannerDescription } from '.'

const SiteBanner = ({ title, description }) => (
    <Banner>
        <BannerTitle>{title}</BannerTitle>
        <BannerDescription>{description}</BannerDescription>
    </Banner>

)

SiteBanner.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
}

export default SiteBanner