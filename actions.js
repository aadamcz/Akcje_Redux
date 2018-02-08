import uuid from uuid;

//Zdefiniować typy akcji oraz kreatory akcji dla zdarzeń:
//Tworzenie komentarza

const ADD_COMMENT = 'ADD_COMMENT';

function addComment(text) {
	return {
		type: ADD_COMMENT,
		text,
		id: uuid.v4()
	}
}
//Jednoczesne tworzenie i wysyłanie akcji
store.dispatch(addComment({text}));

//Edycja komentarza

const EDIT_COMMENT = 'EDIT_COMMENT';

function editComment(text) {
	return {
		type: EDIT_COMMENT,
		text,
		id: uuid.v4()
	}
}

//Jednoczesne tworzenie i wysyłanie akcji
store.dispatch(editComment({text}));

//Usuwanie komentarza

const REMOVE_COMMENT = 'REMOVE_COMMENT';

function removeComment(id) {
	return {
		type: REMOVE_COMMENT,
		id: commentId,
	}
}

store.dispatch(removeComment({id}));

//Ocenianie +1/-1 komentarza

const  THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const  THUMB_DOWN_COMMENT = 'THUMB_UP_COMMENT';

function thumbUpComment(id) {
	return {
		type: THUMB_UP_COMMENT,
		id: commentId
	}
}

function thumbDownComment(id) {
	return {
		type: THUMB_DOWN_COMMENT,
		id: commentId
	}
}

store.dispatch(thumbUpComment({id}));
store.dispatch(thumbDownComment({id}));