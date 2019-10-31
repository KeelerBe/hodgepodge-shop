import React from 'react'
import PropTypes from 'prop-types'

const ProductsList = ({ title, section, subheading, children }) => (
	<div id="products-list">
		<h2>{title}</h2>
		{section}
		{subheading}
		{children}
	</div>
)

ProductsList.propTypes = {
	title: PropTypes.string.isRequired,
	section: PropTypes.node,
	subheading: PropTypes.node,
	children: PropTypes.node.isRequired
}

export default ProductsList
