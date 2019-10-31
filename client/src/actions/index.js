import uuidv4 from 'uuid/v4'
import _products from '../api/products.json'
import _users from '../api/users.json'
import _orders from '../api/orders.json'
import * as types from '../constants/actionTypes'
import { getCurrentUserId } from '../reducers/users'
import { getProduct } from '../reducers/products'

const receiveProducts = (products) => ({
	type: types.RECEIVE_PRODUCTS,
	products
})

const receiveUsers = (users, currentUserId) => ({
	type: types.RECEIVE_USERS,
	users,
	currentUserId
})

const receiveOrders = (orders) => ({
	type: types.RECEIVE_ORDERS,
	orders
})

export const fetchInit = () => (dispatch) => {
	const products = _products /* data fetching here */
	const users = _users
	const orders = _orders
	const currentUserId = 'bbeec34e-d71a-4128-8502-5bfef4776b9f'
	dispatch(receiveProducts(products))
	dispatch(receiveUsers(users, currentUserId))
	dispatch(receiveOrders(orders))
}

const addToCart = (productId) => ({
	type: types.ADD_TO_CART,
	productId
})

export const startAddToCart = (productId) => (dispatch, getState) => {
	const { products, users } = getState()
	const { vendorId } = getProduct(products, productId)
	const currentUserId = getCurrentUserId(users)

	if (vendorId === currentUserId) return
	dispatch(addToCart(productId))
}

export const removeFromCart = (productId, quantity) => ({
	type: types.REMOVE_FROM_CART,
	productId,
	quantity
})

export const incrementQuantity = (productId) => ({
	type: types.INCREMENT_QUANTITY,
	productId
})

export const decrementQuantity = (productId) => ({
	type: types.DECREMENT_QUANTITY,
	productId
})

const addNewProduct = (product) => ({
	type: types.ADD_NEW_PRODUCT,
	product
})

export const startAddNewProduct = (newProduct) => (dispatch, getState) => {
	const { users } = getState()
	const vendorId = getCurrentUserId(users) /* current user is vendor */
	const product = {
		...newProduct,
		productId: uuidv4(),
		vendorId
	}

	dispatch(addNewProduct(product))
}

export const editProduct = (productId, product) => ({
	type: types.EDIT_PRODUCT,
	productId,
	product
})

export const deleteProduct = (productId) => ({
	type: types.DELETE_PRODUCT,
	productId
})

export const startCheckout = (products, total) => ({
	type: types.START_CHECKOUT,
	orderId: uuidv4(),
	products,
	total
})
