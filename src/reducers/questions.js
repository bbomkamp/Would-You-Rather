import { ADD_QUESTION, RECEIVE_QUESTION, ANSWER_QUESTION, TOGGLE_ANSWERED } from "../actions/questions";
 
export default function question(state ={}, action){
    switch(action.type){
 
        case TOGGLE_ANSWERED :
 
            const {showAnswered} = state?.showAnswered ?? {}
            let showNewAnsered = true;
 
            if(showAnswered === true)
            {
                showNewAnsered = false;
            }
           
            return{
                ...state,
                showAnswered:showNewAnsered
            }
           
        case RECEIVE_QUESTION :
       
           return {
               ...state,
               ...action.questions
 
            }
            case ADD_QUESTION :
                const { question } = action
 
                return{
                    ...state,
                    [action.question.id]: action.question,
                }
        case ANSWER_QUESTION :
 
            return{
                ...state,
                [action.question.id]:{
                    ...state[action.question.id],
                    [action.answer]: {
                        ...action.question[action.answer],
                        votes: action.question[action.answer].votes.concat([action.user])
                    }
                }
            }
 
        default :
        return state
    }
}

