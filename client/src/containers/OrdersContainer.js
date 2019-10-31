import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getPurchaseOrders, getSalesOrders } from '../reducers/'
import ProductsList from '../components/ProductsList'
import OrdersSection from '../components/sections/OrdersSection'
import PurchaseOrders from '../components/PurchaseOrders'
import SalesOrders from '../components/SalesOrders'
import SalesOrder from '../components/SalesOrder'
import PurchaseOrder from '../components/PurchaseOrder'
import Empty from '../components/Empty'

class OrdersContainer extends Component {
	state = {
		default: true
	}

	toggleLabel = () => this.setState({ default: !this.state.default })

	render() {
		return (
			<ProductsList title="Orders">
				<OrdersSection
					onClick={this.toggleLabel}
					label={this.state.default ? 'Sales' : 'Purchases'}
				/>
				{ this.state.default 
						? this.props.purchaseOrders.length 
								? <PurchaseOrders>
										{ this.props.purchaseOrders.map((order) => (
												<PurchaseOrder
													key={order.orderId}
													orderId={order.orderId}
													total={order.total}
													orderItems={order.orderItems}
												/> )) }
									</PurchaseOrders> 
								: <Empty message="You have no purchase orders." />
		
						: this.props.salesOrders.length 
								? <SalesOrders>
										{ this.props.salesOrders.map((order) => (
											<SalesOrder
												key={order.orderId}
												orderId={order.orderId}
												buyerId={order.buyerId}
												orderItems={order.orderItems}
											/> )) }
									</SalesOrders>
								: <Empty message="You have no sales orders." /> }
			</ProductsList>
		)
	}
}

OrdersContainer.propTypes = {
	purchaseOrders: PropTypes.arrayOf(
		PropTypes.shape({
			orderId: PropTypes.string.isRequired,
			total: PropTypes.number.isRequired,
			orderItems: PropTypes.arrayOf(
				PropTypes.shape({
					productId: PropTypes.string.isRequired,
					productName: PropTypes.string.isRequired,
					vendorId: PropTypes.string.isRequired,
					price: PropTypes.number.isRequired,
					quantity: PropTypes.number.isRquired,
					subtotal: PropTypes.number.isRquired
				})
			)
		})
	).isRequired,
	salesOrders: PropTypes.arrayOf(
		PropTypes.shape({
			orderId: PropTypes.string.isRequired,
			orderItems: PropTypes.arrayOf(
				PropTypes.shape({
					productId: PropTypes.string.isRequired,
					productName: PropTypes.string.isRequired,
					price: PropTypes.number.isRequired,
					quantity: PropTypes.number.isRquired,
					subtotal: PropTypes.number.isRquired
				})
			)
		})
	).isRequired
}

const mapStateToProps = (state) => ({
	purchaseOrders: getPurchaseOrders(state),
	salesOrders: getSalesOrders(state)
})

export default connect(mapStateToProps)(OrdersContainer)
