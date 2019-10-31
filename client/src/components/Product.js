import React from 'react'
import PropTypes from 'prop-types'
import QuantityContainer from '../containers/QuantityContainer'

const Product = ({
	productId,
	productName,
	price,
	available,
	quantity,
	vendorName
}) => (
	<div>
		<li><b>Product Name: </b>{productName}</li>
		<li><b>Price: </b>&#36;{(price / 100).toFixed(2)}</li>
		{ available >= 0 && 
		    <li><b>Available: </b>{available}</li> }
		{ quantity && renderQuantity(quantity, productId) }
		{ vendorName && <li><b>Vendor: </b>{vendorName}</li> }
	</div>
)

const renderQuantity = (quantity, productId) => (
  <li>
		<b>Quantity: </b>
		<QuantityContainer quantity={quantity} productId={productId} />
	</li>
)

Product.propTypes = {
	productId: PropTypes.string.isRequired,
	productName: PropTypes.string.isRequired,
	price: PropTypes.number.isRequired,
	available: PropTypes.number,
	quantity: PropTypes.number,
	vendorName: PropTypes.string
}

export default Product
