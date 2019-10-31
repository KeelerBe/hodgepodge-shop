import React from 'react'
import './App.css'
import ProductsContainer from './ProductsContainer'
import InventoryContainer from './InventoryContainer'
import CartContainer from './CartContainer'
import OrdersContainer from './OrdersContainer'

const App = () => (
	<div id="main">
		<ProductsContainer />
		<InventoryContainer />
		<CartContainer />
		<OrdersContainer />
	</div>
)

export default App
