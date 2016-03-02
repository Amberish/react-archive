export function selectBook(book) {
	//SelctBook is an action creator, it needs to return action
	return {
		type : 'BOOK_SELECTED',
		payload : book
	};
}
