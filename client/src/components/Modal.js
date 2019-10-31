import { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'

const modalRoot = document.getElementById('modal-root')

class Modal extends Component {
	constructor(props) {
		super(props)
		this.container = document.createElement('div')
	}

	componentDidMount() {
		modalRoot.appendChild(this.container)
	}

	componentWillUnmount() {
		modalRoot.removeChild(this.container)
	}

	render() {
		return ReactDOM.createPortal(this.props.children, this.container)
	}
}

Modal.propTypes = {
	children: PropTypes.node.isRequired
}

export default Modal
