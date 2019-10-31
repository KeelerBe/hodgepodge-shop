import React from 'react'
import PropTypes from 'prop-types'

const Greeting = ({ userName }) => (
	<section>
		<p>Hello, <b>{userName || 'user'}</b>!</p>
		<button>{userName ? 'Sign out' : 'Sign in'}</button>
	</section>
)

Greeting.propTypes = {
	userName: PropTypes.string.isRequired
}

export default Greeting
