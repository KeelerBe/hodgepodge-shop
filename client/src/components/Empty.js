import React from 'react'
import PropTypes from 'prop-types'

const Empty = ({ message }) => (
	<div id="empty">
		<p>{message}</p>
	</div>
)

Empty.propTypes = {
	message: PropTypes.string.isRequired
}

export default Empty
