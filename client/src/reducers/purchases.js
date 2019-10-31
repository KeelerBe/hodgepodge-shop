/* eslint-disable */
import produce from 'immer'
import { RECEIVE_USERS, START_CHECKOUT } from '../constants/actionTypes'

const INITIAL_STATE = {
	allIds: []
}

export default produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users[action.currentUserId].buyerOrderIds
		case START_CHECKOUT:
			draft.push(action.orderId)
			return
	}
}, INITIAL_STATE.allIds)

export const getBuyerOrderIds = (state) => state
