import React from 'react'
import PropTypes from 'prop-types'

const PurchaseOrders = ({ children }) => (
	<div id="purchases">
		<h3>Purchases</h3>
		{children}
	</div>
)

PurchaseOrders.propTypes = {
	children: PropTypes.node.isRequired
}

export default PurchaseOrders
