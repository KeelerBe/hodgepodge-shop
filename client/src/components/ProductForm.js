import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Formik, Form, Field } from 'formik'

const ProductForm = ({
	product = {
		productId: undefined,
		productName: '',
		price: undefined,
		available: undefined
	},
	closeModal,
	startAddNewProduct,
	editProduct
}) => (
	<Fragment>
		<div id="modal-overlay" />
		<div id="product-form">
			<Formik
				
				initialValues={{
					productName: product.productName,
					price: product.price,
					available: product.available
				}}
				
				onSubmit={(values, { resetForm }) => {
					const { productId } = product
					productId
						? editProduct(productId, values)
						: startAddNewProduct(values)
					resetForm({})
					closeModal()
				}}>
				
				{() => (
					<div>
						<Form>
							<div>
								<label htmlFor="productName">Product Name</label>
								<Field id="productName" name="productName" type="text" />
							</div>
							<div>
								<label htmlFor="price">Price</label>
								<Field id="price" name="price" type="number" />
							</div>
							<div>
								<label htmlFor="available">Available</label>
								<Field id="available" name="available" type="number" />
							</div>
							<div>
								<button type="button" onClick={closeModal}>
									Cancel
								</button>
								<button type="submit">Save</button>
							</div>
						</Form>
					</div>
				)}
			</Formik>
		</div>
	</Fragment>
)

ProductForm.propTypes = {
	product: PropTypes.shape({
		productId: PropTypes.string,
		productName: PropTypes.string,
		price: PropTypes.number,
		available: PropTypes.number
	}),
	closeModal: PropTypes.func.isRequired,
	startAddNewProduct: PropTypes.func.isRequired,
	editProduct: PropTypes.func.isRequired
}

export default ProductForm
