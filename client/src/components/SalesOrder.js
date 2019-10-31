import React from 'react'
import PropTypes from 'prop-types'

const SalesOrder = ({ orderId, orderItems }) => (
	<tbody>
		{ orderItems.map((item) => (
				<tr key={item.productId}>
					<td>{item.productName}</td>
					<td>{orderId}</td>
					<td>&#36;{(item.price / 100).toFixed(2)}</td>
					<td>{item.quantity}</td>
					<td>&#36;{(item.subtotal / 100).toFixed(2)}</td>
				</tr> )) }
	</tbody>
)

SalesOrder.propTypes = {
	orderId: PropTypes.string.isRequired,
	orderItems: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired,
			subtotal: PropTypes.number.isRequired
		})
	)
}

export default SalesOrder
