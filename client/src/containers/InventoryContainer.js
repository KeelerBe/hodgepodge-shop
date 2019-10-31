import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { deleteProduct } from '../actions'
import { getInventoryProducts } from '../reducers'
import { getVendorName } from '../reducers/users'
import ModalHandler from '../components/ModalHandler'
import ProductsList from '../components/ProductsList'
import ProductItem from '../components/ProductItem'
import Product from '../components/Product'
import Empty from '../components/Empty'

const InventoryContainer = ({ vendorName, products, deleteProduct }) => (
	<ProductsList
		title="Inventory"
		section={
			<ModalHandler 
				id="add-new-product" 
				label="Add new product" 
			/>
		}
		subheading={ <p>{vendorName}</p> }>
		
		{ products.length 
				? products.map((product) => (
					<ProductItem
						key={product.productId}
						actions={[
							{ label: 'Edit', product: product },
							{ label: 'Delete', onClick: () => deleteProduct(product.productId) }
						]}
					>
						<Product
							productName={product.productName}
							price={product.price}
							available={product.available}
						/> 
					</ProductItem> ))
					
				: <Empty message="There are no products in your inventory." /> }
	</ProductsList>
)

InventoryContainer.propTypes = {
	vendorName: PropTypes.string.isRequired,
	products: PropTypes.arrayOf(
		PropTypes.shape({
			productId: PropTypes.string.isRequired,
			productName: PropTypes.string.isRequired,
			price: PropTypes.number.isRequired,
			available: PropTypes.number.isRequired
		})
	).isRequired
}

const mapStateToProps = (state) => ({
	products: getInventoryProducts(state),
	vendorName: getVendorName(state.users)
})

export default connect(
	mapStateToProps,
	{ deleteProduct }
)(InventoryContainer)
