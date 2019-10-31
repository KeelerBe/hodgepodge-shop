/* eslint-disable */
import { combineReducers } from 'redux'
import produce from 'immer'
import { RECEIVE_USERS } from '../constants/actionTypes'

const INITIAL_STATE = {
	currentUserId: '',
	byId: {}
}

const currentUserId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.currentUserId
	}
}, INITIAL_STATE.currentUserId)

const byId = produce((draft, action) => {
	switch (action.type) {
		case RECEIVE_USERS:
			return action.users
	}
}, INITIAL_STATE.byId)

export default combineReducers({
	currentUserId,
	byId
})

export const getCurrentUserId = (state) => state.currentUserId

export const getUser = (state, userId) => state.byId[userId]

export const getCurrentUserName = (state) =>
	getUser(state, getCurrentUserId(state)).firstName

export const getVendorName = (state) =>
	getUser(state, getCurrentUserId(state)).vendorName
