import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ModalButton from './ModalButton'
import Modal from './Modal'
import ProductFormContainer from '../containers/ProductFormContainer'
import ProductForm from './ProductForm'

class ModalHandler extends Component {
	state = { showModal: false }

	openModal = () => this.setState({ showModal: true })
	closeModal = () => this.setState({ showModal: false })

	render() {
		return (
			<div id="modal">
				<ModalButton
					id={this.props.id || ''}
					label={this.props.label}
					onClick={this.openModal}
				/>
				{ this.state.showModal && (
						<Modal>
							<ProductFormContainer>
								{({ startAddNewProduct, editProduct }) => (
									<ProductForm
										closeModal={this.closeModal}
										startAddNewProduct={startAddNewProduct}
										editProduct={editProduct}
										product={this.props.product}
									/>
								)}
							</ProductFormContainer>
						</Modal> ) }
			</div>
		)
	}
}

ModalHandler.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	product: PropTypes.shape({
		productId: PropTypes.string,
		productName: PropTypes.string,
		price: PropTypes.number,
		available: PropTypes.number
	})
}

export default ModalHandler
