import { CHOSEN_USER, CLEAR_USER } from '../actions/setUser'

export default function setUser (state = null, action){
    switch(action.type){
        case CHOSEN_USER:
            return action.id
        case CLEAR_USER:
            return null  
        default:
            return state      
    }
}