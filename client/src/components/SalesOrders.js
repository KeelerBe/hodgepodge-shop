import React from 'react'
import PropTypes from 'prop-types'

const SalesOrders = ({ children }) => (
	<div id="sales">
		<h3>Sales</h3>
		<div>
			<table>
				<thead>
					<tr>
						<th>Product Name</th>
						<th>Order ID</th>
						<th>Price</th>
						<th>Qty.</th>
						<th>Subtotal</th>
					</tr>
				</thead>
				{children}
			</table>
		</div>
	</div>
)

SalesOrders.propTypes = {
	children: PropTypes.node.isRequired
}

export default SalesOrders
