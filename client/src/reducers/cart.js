/* eslint-disable */
import { combineReducers } from 'redux'
import produce from 'immer'
import {
	RECEIVE_USERS,
	ADD_TO_CART,
	REMOVE_FROM_CART,
	INCREMENT_QUANTITY,
	DECREMENT_QUANTITY,
	DELETE_PRODUCT,
	START_CHECKOUT
} from '../constants/actionTypes'

const INITIAL_STATE = {
	allIds: [],
	quantityById: {}
}

const allIds = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users[action.currentUserId].cartProductIds
		case ADD_TO_CART:
			draft.push(action.productId)
			return
		case REMOVE_FROM_CART:
			return draft.filter((id) => id !== action.productId)
		case DELETE_PRODUCT:
			return draft.filter((id) => id !== action.productId)
		case START_CHECKOUT:
			return INITIAL_STATE.allIds
	}
}, INITIAL_STATE.allIds)

const quantityById = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users[action.currentUserId].cartProductQuantityById
		case ADD_TO_CART:
			draft[action.productId] = 1
			return
		case REMOVE_FROM_CART:
			delete draft[action.productId]
			return
		case INCREMENT_QUANTITY:
			draft[action.productId] += 1
			return
		case DECREMENT_QUANTITY:
			draft[action.productId] -= 1
			return
		case DELETE_PRODUCT:
			delete draft[action.productId]
			return
		case START_CHECKOUT:
			return INITIAL_STATE.quantityById
	}
}, INITIAL_STATE.quantityById)

export default combineReducers({
	allIds,
	quantityById
})

export const getCartProductIds = (state) => state.allIds

export const getQuantityById = (state, productId) =>
	state.quantityById[productId]

export const getNumOfItems = (state) =>
	getCartProductIds(state).reduce(
		(total, productId) => total + getQuantityById(state, productId)
	, 0)
