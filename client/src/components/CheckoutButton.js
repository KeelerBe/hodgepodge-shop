import React from 'react'
import PropTypes from 'prop-types'

const CheckoutButton = ({ onClick }) => (
	<button onClick={onClick}>Checkout</button>
)

CheckoutButton.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default CheckoutButton
