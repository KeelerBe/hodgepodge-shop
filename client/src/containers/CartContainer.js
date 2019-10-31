import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { removeFromCart, startCheckout } from '../actions'
import { getCartProducts, getTotal } from '../reducers'
import { getNumOfItems } from '../reducers/cart'
import CartSummary from '../components/sections/CartSection'
import Total from '../components/subheadings/CartSubheading'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import Product from '../components/Product'

const CartContainer = ({
	numOfItems,
	total,
	products,
	removeFromCart,
	startCheckout
}) => (
	<ProductsList
		title="Cart"
		section={
			<CartSummary
				numOfItems={numOfItems}
				onClick={() => startCheckout(products, total)}
			/> 
		}
		subheading={<Total total={total} />}>
		
		{ products.map((product) => (
				<ProductItem
					key={product.productId}
					actions={[
						{ label: 'Remove', 
							onClick: 
								() => removeFromCart(product.productId, product.quantity) }
					]}
				>
					<Product
						productId={product.productId}
						productName={product.productName}
						price={product.price}
						quantity={product.quantity}
					/>  
				</ProductItem>
		)) }
	</ProductsList>
)

CartContainer.propTypes = {
	numOfItems: PropTypes.number.isRequired,
	total: PropTypes.number.isRequired,
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			quantity: PropTypes.number.isRequired
		})
	).isRequired,
	removeFromCart: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
	products: getCartProducts(state),
	numOfItems: getNumOfItems(state.cart),
	total: getTotal(state)
})

export default connect(
	mapStateToProps,
	{ removeFromCart, startCheckout }
)(CartContainer)
