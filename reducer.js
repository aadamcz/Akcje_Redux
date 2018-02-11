import {combineReducers} from 'redux';
import comments from './comments';

const initialState = {
 	comments: [],
 	users: []
};

//Główny reducer
const app = combineReducers({
	comments
});


//Inaczej główny reduktor
// function app(state=initialState, action) {
// 	return {
// 		comments: comments(state.comments, action)
// 	}
// }
