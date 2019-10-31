import React from 'react'
import PropTypes from 'prop-types'

const PurchaseItem = ({ productName, vendorId, price, quantity, subtotal }) => (
	<tbody>
		<tr>
			<td>{productName}</td>
			<td>{vendorId}</td>
			<td>&#36;{(price / 100).toFixed(2)}</td>
			<td>{quantity}</td>
			<td>&#36;{(subtotal / 100).toFixed(2)}</td>
		</tr>
	</tbody>
)

PurchaseItem.propTypes = {
	productName: PropTypes.string,
	vendorId: PropTypes.string,
	price: PropTypes.number,
	quantity: PropTypes.number,
	subtotal: PropTypes.number
}

export default PurchaseItem
