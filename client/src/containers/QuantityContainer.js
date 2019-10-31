import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { incrementQuantity, decrementQuantity } from '../actions'
import { getAvailable } from '../reducers/products'
import QuantityField from '../components/QuantityField'

const QuantityContainer = ({
	available,
	incrementQuantity,
	decrementQuantity,
	quantity
}) => (
	<QuantityField
		available={available}
		quantity={quantity}
		onIncrement={incrementQuantity}
		onDecrement={decrementQuantity}
	/>
)

QuantityContainer.propTypes = {
	available: PropTypes.number.isRequired,
	incrementQuantity: PropTypes.func.isRequired,
	decrementQuantity: PropTypes.func.isRequired,
	quantity: PropTypes.number.isRequired
}

const mapStateToProps = (state, ownProps) => ({
	available: getAvailable(state.products, ownProps.productId)
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	incrementQuantity: () => dispatch(incrementQuantity(ownProps.productId)),
	decrementQuantity: () => dispatch(decrementQuantity(ownProps.productId))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(QuantityContainer)
