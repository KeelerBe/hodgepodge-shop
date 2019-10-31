import React from 'react'
import PropTypes from 'prop-types'

const Orders = ({ onClick, label }) => (
	<section>
		<p />
		<button onClick={onClick}>Go to {label}</button>
	</section>
)

Orders.propTypes = {
	onClick: PropTypes.func.isRequired,
	label: PropTypes.string.isRequired
}

export default Orders
