export const GET_USERS = 'GET_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'

/**
 * recieveUsers()
 * Action Creator
 * 
 * Gets Users from the Store
 * 
 * @param {users} users 
 * @returns users
 */
export function receiveUsers(users) {
    return {
        type: GET_USERS,
        users,
    }
}

/**
 * 
 * @param {question} question 
 * @param {answer} answer 
 * @param {authedUser} authedUser 
 * @returns question, answer, authedUser
 */
export function usersQuestionAnswer(question, answer, authedUser) {
    return {
        type: ADD_ANSWER,
        question,
        answer,
        user: authedUser
    }
}