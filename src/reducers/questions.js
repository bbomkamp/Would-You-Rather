import { ADD_QUESTION, RECEIVE_QUESTIONS, ANSWER_QUESTION, TOGGLE_ANSWERED } from "../actions/questions";

/**
 * question()
 * Reducer
 * Takes the current State and an Action and returns the new State.
 * Handles the State of Questions asked, answered, and added by using
 * Switchs statements.
 * 
 * @param {state} state 
 * @param {action} action 
 * @returns state
 */
export default function question(state = {}, action) {
    switch (action.type) {

        case TOGGLE_ANSWERED:
            const { showAnsweredValue } = state?.showAnswered ?? {}
            let showNewAnsweredValue = true;

            if (showAnsweredValue === true) {
                showNewAnsweredValue = false;
            }

            return {
                ...state,
                showAnswered: showNewAnsweredValue
            }

        case RECEIVE_QUESTIONS:

            return {
                ...state,
                ...action.questions

            }
        case ADD_QUESTION:
            const { question } = action

            return {
                ...state,
                [action.question.id]: action.question,
            }
        case ANSWER_QUESTION:

            return {
                ...state,
                [action.question.id]: {
                    ...state[action.question.id],
                    [action.answer]: {
                        ...action.question[action.answer],
                        votes: action.question[action.answer].votes.concat([action.user])
                    }
                }
            }

        default:
            return state
    }
}