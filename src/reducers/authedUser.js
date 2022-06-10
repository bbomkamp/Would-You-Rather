import { SET_AUTHED_USER, CLEAR_AUTHED_USER } from '../actions/authedUser'

/**
 * authedUser()
 * Reducer
 * Takes the current State and an Action and returns the new State
 * Handles setting current User State and clearing User State
 * 
 * @param {state} state 
 * @param {action} action 
 * @returns state
 */
export default function authedUser(state = null, action) {
    switch (action.type) {
        case SET_AUTHED_USER:
            return action.id
        case CLEAR_AUTHED_USER:
            return null
        default:
            return state
    }
}