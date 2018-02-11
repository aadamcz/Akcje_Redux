function comments(state = [], action) { //początkowy stan aplikacji to pusta tablica
	switch (action.type) {
		case ADD_COMMENT:
			return [{
						id: action.id,
						text: action.text,
						votes: 0
					},
					...state.comments];	
		case REMOVE_COMMENT:
			return  state.comments.filter(comment => comment.id !== action.id);	
		case EDIT_COMMENT:
			return state.map(comment => (comment.id === action.id ? {...comment, text :action.text})
			); 	
		case THUMB_UP_COMMENT:
			return state.map(comment => (comment.id === action.id ? { ...comment, votes: comment.votes + 1 });
				return comment;
			);
		case THUMB_DOWN_COMMENT:
			return state.map(comment => (comment.id === action.id ? { ...comment, votes: comment.votes - 1 });
				return comment;
			);
		default:
			return state;
	}
}
