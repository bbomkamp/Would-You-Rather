import { GET_USERS, ADD_ANSWER } from '../actions/users'

/**
 * user()
 * Reducer
 * Takes the current State and an Action and returns the new State
 * Handles getting users and adding users answers
 * 
 * @param {state} state 
 * @param {action} action 
 * @returns state
 */
export default function user(state = {}, action) {
    switch (action.type) {
        case GET_USERS:
            return {
                ...state,
                ...action.users
            }
        case ADD_ANSWER:

            return {
                ...state,
                [action.user]: {
                    ...state[action.user],
                    answers: {
                        ...state[action.user].answers,
                        [action.question.id]: action.answer
                    }
                }
            }

        default:
            return state
    }
}