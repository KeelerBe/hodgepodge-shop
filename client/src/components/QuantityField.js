import React from 'react'
import PropTypes from 'prop-types'

const QuantityField = ({ available, quantity, onIncrement, onDecrement }) => (
	<div id="quantity">
		<button
			type="button"
			onClick={onDecrement}
			disabled={quantity <= 1 ? 'disabled' : ''}
		>
			-
		</button>
		<p> {quantity} </p>
		<button
			type="button"
			onClick={onIncrement}
			disabled={available < 1 ? 'disabled' : ''}
		>
			+
		</button>
	</div>
)

QuantityField.propTypes = {
	available: PropTypes.number.isRequired,
	quantity: PropTypes.number.isRequired,
	onIncrement: PropTypes.func.isRequired,
	onDecrement: PropTypes.func.isRequired
}

export default QuantityField
