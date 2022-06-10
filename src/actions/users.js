export const GET_USERS = 'GET_USERS'
export const ADD_ANSWER = 'ADD_ANSWER'

export function receiveUsers (users) {
    return{
        type: GET_USERS,
        users,
    }
}

export function answerQuestionUser(question, answer, authedUser){
    return {
        type: ADD_ANSWER,
        question,
        answer,
        user: authedUser
    }
}