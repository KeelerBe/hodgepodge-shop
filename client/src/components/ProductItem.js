import React from 'react'
import PropTypes from 'prop-types'
import ModalHandler from '../components/ModalHandler'

const ProductItem = ({ actions, children }) => (
	<div id="product-item">
		{children}
		
		{ actions.map((action) =>
				action.label === 'Edit' 
					? <ModalHandler
							key={action.label}
							label={action.label}
							product={action.product}
						/>
				  : <button
							key={action.label}
							onClick={action.onClick}
							disabled={action.disabled}
						>
							{action.label}
						</button> ) }
	</div>
)

ProductItem.propTypes = {
	children: PropTypes.element.isRequired,
	actions: PropTypes.arrayOf(
		PropTypes.oneOfType([
			PropTypes.shape({
				label: PropTypes.string.isRequired,
				onClick: PropTypes.func.isRequired,
				disabled: PropTypes.bool
			}),
			PropTypes.shape({
				label: PropTypes.string.isRequired,
				product: PropTypes.object.isRequired
			})
		])
	).isRequired
}

export default ProductItem
