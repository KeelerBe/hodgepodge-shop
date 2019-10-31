import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { startAddNewProduct, editProduct } from '../actions'

const ProductFormContainer = ({
	startAddNewProduct,
	editProduct,
	children
}) => children({ startAddNewProduct, editProduct })

ProductFormContainer.propTypes = {
	startAddNewProduct: PropTypes.func.isRequired,
	editProduct: PropTypes.func.isRequired,
	children: PropTypes.func.isRequired
}

export default connect( 
	null,
	{ startAddNewProduct, editProduct }
)(ProductFormContainer)
