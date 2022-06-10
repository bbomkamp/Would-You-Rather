import { saveQuestion, saveQuestionAnswer } from "../helpers/api"
 
export const ADD_QUESTION = 'ADD_QUESTION'
export const ANSWER_QUESTION = 'ANSWER_QUESTION'
export const RECEIVE_QUESTION = 'RECEIVE_QUESTION'
export const TOGGLE_ANSWERED = 'TOGGLE_ANSWERED'
 
 
export function receiveQuestions (questions) {
    return{
        type: RECEIVE_QUESTION,
        questions,
    }
}
 
export function toggleShowAnswered() {
    return{
        type: TOGGLE_ANSWERED
    }
}
 
export function addQuestion (question){
    return {
        type: ADD_QUESTION,
        question
    }
}
 
export function answerQuestion(question, answer, authedUser){
    return {
        type: ANSWER_QUESTION,
        question,
        answer,
        user: authedUser 
    }
}
 
export function handleToggleShowAnswered(){
    return(dispatch) => {
        dispatch(toggleShowAnswered());
    }
}
 
 
export function handleAnswerQuestion(question, answer){
 
    return(dispatch, getState) => {
    const qid = question.id
    const {authedUser } = getState()
 
    console.log('Test AuthedUser', authedUser)
    console.log('Test Question ID', question.id)
    console.log('Test Answer', answer)
    dispatch(answerQuestion(question, answer, authedUser))

 
    return saveQuestionAnswer({
        authedUser, qid, answer
    }).catch((e) => {
        console.warn('Error in saveQuestion: ' , e)
    })
    }
}
 
export function handleAddQuestion(q1Text, q2Text){
 
   return(dispatch, getState) => {
       const {authedUser } = getState()
 
       return saveQuestion({
        optionOneText: q1Text,
        optionTwoText: q2Text,
        author: authedUser
       })
       .then((question) => dispatch(addQuestion(question)))
   }
}