import { GET_USERS, ADD_ANSWER } from '../actions/users'

export default function user(state = {}, action){
    switch(action.type){
        case GET_USERS : 
        return {
            ...state,
            ...action.users
        }
        case ADD_ANSWER :

        let testUser = action.user;
        let testQuestion = action.question.id;



            return{
                ...state,
                [action.user]: {
                    ...state[action.user],
                        answers: {
                          ...state[action.user].answers,
                          [action.question.id]: action.answer
                        }                            
                    }   
                 }

        default :
        return state
    }
}