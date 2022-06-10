import { usersQuestionAnswer } from "./users"
import { saveQuestion, saveQuestionAnswer } from "../helpers/api"

export const TOGGLE_ANSWERED = 'TOGGLE_ANSWERED'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const ADD_QUESTION = 'ADD_QUESTION'

/**
 * receiveQuestions()
 * Action Creator
 * 
 * Gets Questions from Store
 * 
 * @param {questions} questions 
 * @returns questions
 */
export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions,
    }
}

/**
 * addQuestion()
 * Action Creator
 * 
 * Adds user generated question
 * 
 * @param {question} question 
 * @returns question
 */
export function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

/**
 * 
 * @param {q1} q1
 * @param {q2} q2 
 * @returns question
 */
export function addQuestionHelper(q1, q2) {

    return (dispatch, getState) => {
        const { authedUser } = getState()

        return saveQuestion({
            optionOneText: q1,
            optionTwoText: q2,
            author: authedUser
        })
            .then((question) => dispatch(addQuestion(question)))
    }

}

/**
 * answerQuestion()
 * Action Creator
 * @param {question} question 
 * @param {answer} answer 
 * @param {authedUser} authedUser 
 * @returns question, answer, authedUser
 */
export function answerQuestion(question, answer, authedUser) {
    return {
        type: ANSWER_QUESTION,
        question,
        answer,
        user: authedUser
    }
}

/**
 * answerQuestionHelper()
 * Action Creator
 * 
 * @param {question} question 
 * @param {answer} answer 
 * @returns question, answer
 */
export function answerQuestionHelper(question, answer) {

    return (dispatch, getState) => {

        const { authedUser } = getState()
        const questionId = question.id

        dispatch(answerQuestion(question, answer, authedUser))
        dispatch(usersQuestionAnswer(question, answer, authedUser))

        return saveQuestionAnswer({
            authedUser, questionId, answer
        }).catch((e) => {
            console.warn('Whoops! Something Went Wrong. ', e)
        })
    }
}

/**
 * Handles the toggling of Answered and Unanswered Questions
 */
export function toggleShowAnswered() {
    return {
        type: TOGGLE_ANSWERED
    }
}
export function handleToggleShowAnswered() {
    return (dispatch) => {
        dispatch(toggleShowAnswered());
    }
}
