import React from 'react'
import PropTypes from 'prop-types'

const CartSection = ({ numOfItems, onClick }) => (
	<section>
		<p>There are <b>{numOfItems}</b> items in your cart.</p>
		<button onClick={onClick}>Checkout</button>
	</section>
)

CartSection.propTypes = {
	numOfItems: PropTypes.number.isRequired,
	onClick: PropTypes.func.isRequired
}

export default CartSection
