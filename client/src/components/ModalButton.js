import React from 'react'
import PropTypes from 'prop-types'

const ModalButton = ({ id, label, onClick }) => (
	<button id={id} onClick={onClick}>
		{label}
	</button>
)

ModalButton.propTypes = {
	id: PropTypes.string,
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func.isRequired
}

export default ModalButton
