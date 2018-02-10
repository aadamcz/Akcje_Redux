import uuid from uuid;

//Zdefiniować typy akcji oraz kreatory akcji dla zdarzeń:
//Tworzenie komentarza

export const ADD_COMMENT = 'ADD_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_UP_COMMENT';

//Dodawanie komentarza
function addComment(text) {
	return {
		type: ADD_COMMENT,
		text, //text:text
		id: uuid.v4()
	}
}

//Edycja komentarza
function editComment(id, text) {
	return {
		type: EDIT_COMMENT,
		text,
	}
}

//Usuwanie komentarza
function removeComment(id) { //id - identyfikacja komentarza do usunięcia
		type: REMOVE_COMMENT,
		id
	}
}

//Ocenianie +1/-1 komentarza
function thumbUpComment(id) { //id - którego komentarza dotyczy inc
	return {
		type: THUMB_UP_COMMENT,
		id
	}
}

function thumbDownComment(id) {//id - którego komentarza dotyczy dec
	return {
		type: THUMB_DOWN_COMMENT,
		id
	}
}

//Jednoczesne tworzenie i wysyłanie akcji
store.dispatch(addComment({text}));
store.dispatch(editComment({text}));
store.dispatch(removeComment({id}));
store.dispatch(thumbUpComment({id}));
store.dispatch(thumbDownComment({id}));