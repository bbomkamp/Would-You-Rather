import { combineReducers } from 'redux'
import authedUser from './authedUser'
import users from './users'
import questions from './questions'

/**
 * Combines Reducers
 */
export default combineReducers({
    authedUser,
    users,
    questions,
}
)