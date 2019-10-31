/* eslint-disable */
import { combineReducers } from 'redux'
import { produce } from 'immer'
import { RECEIVE_ORDERS, START_CHECKOUT } from '../constants/actionTypes'

const INITIAL_STATE = {
	byId: {}
}

export default produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_ORDERS:
			return action.orders
		case START_CHECKOUT:
			draft[action.orderId] = {
				orderId: action.orderId,
				total: action.total,
				orderItems: action.products
			}
			return
	}
}, INITIAL_STATE.byId)

export const getOrder = (state, orderId) => state[orderId]
