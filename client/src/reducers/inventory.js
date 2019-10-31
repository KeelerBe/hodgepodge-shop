/* eslint-disable */
import produce from 'immer'
import {
	RECEIVE_USERS,
	ADD_NEW_PRODUCT,
	DELETE_PRODUCT
} from '../constants/actionTypes'

const INITIAL_STATE = {
	allIds: []
}

export default produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users[action.currentUserId].inventoryProductIds
		case ADD_NEW_PRODUCT:
			draft.push(action.product.productId)
			return
		case DELETE_PRODUCT:
			return draft.filter((id) => id !== action.productId)
	}
}, INITIAL_STATE.allIds)

export const getInventoryProductIds = (state) => state
