import (ADD_COMMENT) from './actions';
import (REMOVE_COMMENT) from './actions';
import (EDIT_COMMENT) from './actions';
import (THUMB_UP_COMMENT) from './actions';
import (THUMB_DOWN_COMMENT) from './actions';

const initialState = {
	comments: [],
	users: []
};

// function reducer(state, action) {
// 	if (!state) {
// 		return initialState;
// 	}
// 	return state;
// }

//ES6

function reducer(state = initialState, action) {
	switch (action.type) {
		case ADD_COMMENT:
			return Object.assign({}, state, {
				comments: [
					{
						id: action.id,
						text: action.text,
						votes: 0
					},
					...state]
			});
		case REMOVE_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});
		case EDIT_COMMENT:
			return Object.assign({}, state, {
				comments: state.comments.filter(comment => comment.id !== action.id)
			});
		case THUMB_UP_COMMENT:
			return state + 1;
		case THUMB_DOWN_COMMENT:
			return state - 1;	
		default:
			return state;
	}
}
