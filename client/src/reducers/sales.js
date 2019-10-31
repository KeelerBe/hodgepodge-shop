/* eslint-disable */
import produce from 'immer'
import { RECEIVE_USERS } from '../constants/actionTypes'

const INITIAL_STATE = {
	allIds: []
}

export default produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users[action.currentUserId].vendorOrderIds
	}
}, INITIAL_STATE.allIds)

export const getVendorOrderIds = (state) => state
