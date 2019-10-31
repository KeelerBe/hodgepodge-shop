import { combineReducers } from 'redux'
import users, * as fromUsers from './users'
import products, * as fromProducts from './products'
import orders, * as fromOrders from './orders'
import cart, * as fromCart from './cart'
import inventory, * as fromInventory from './inventory'
import purchases, * as fromPurchases from './purchases'
import sales, * as fromSales from './sales'

export default combineReducers({
	users,
	products,
	orders,
	cart,
	inventory,
	purchases,
	sales
})

/* subselectors */
const getProduct = (state, productId) =>
	fromProducts.getProduct(state.products, productId)

/* subselectors for Products */
const getUser = (state, userId) => fromUsers.getUser(state.users, userId)
const getVisibleProducts = (state) =>
	fromProducts.getVisibleProducts(state.products)

/* PRODUCTS */
export const getStoreProducts = (state) =>
	getVisibleProducts(state).map((p) => {
		const { vendorId, ...product } = p
		return {
			...product,
			vendorName: getUser(state, vendorId).vendorName
		}
	})

/* subselectors for Cart */
const getQuantityById = (state, productId) =>
	fromCart.getQuantityById(state.cart, productId)
const getCartProductIds = (state) => fromCart.getCartProductIds(state.cart)

/* CART */
export const getCartProducts = (state) => {
	const getSubtotal = (state, productId, price) =>
		price * getQuantityById(state, productId)
	
	return getCartProductIds(state).map((productId) => {
		const product = getProduct(state, productId)
		return {
			...product,
			subtotal: getSubtotal(state, productId, product.price),
			quantity: getQuantityById(state, productId)
		}
	})
}

export const getTotal = (state) =>
	getCartProductIds(state).reduce((total, productId) => {
		const { price } = getProduct(state, productId)
		return total + price * getQuantityById(state, productId)
	}, 0)
 
/* subselectors for Inventory */
const getInventoryProductIds = (state) =>
	fromInventory.getInventoryProductIds(state.inventory)

/* INVENTORY */
export const getInventoryProducts = (state) =>
	getInventoryProductIds(state).map((productId) => getProduct(state, productId))

/* subselectors for Orders */
const getCurrentUserId = (state) =>
	fromUsers.getCurrentUserId(state.users)
const getOrder = (state, orderId) => fromOrders.getOrder(state.orders, orderId)
const getBuyerOrderIds = (state) =>
	fromPurchases.getBuyerOrderIds(state.purchases)
const getVendorOrderIds = (state) => fromSales.getVendorOrderIds(state.sales)

/* ORDERS: PURCHASES */
export const getPurchaseOrders = (state) =>
	getBuyerOrderIds(state).map((orderId) => getOrder(state, orderId))

/* ORDERS: SALES */
export const getSalesOrders = (state) => {
	const orders = getVendorOrderIds(state).map((orderId) =>
		getOrder(state, orderId)
	)
	return orders.map((order) => {
		const orderItems = order.orderItems.filter(
			(item) => item.vendorId === getCurrentUserId(state)
		)
		return {
			orderId: order.orderId,
			buyerId: order.buyerId,
			orderItems
		}
	})
}
