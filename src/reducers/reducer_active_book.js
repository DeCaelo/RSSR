// this state argument is not application state
export default function(state= null, action) {
  switch(action.type){
    case 'BOOK_SELECTED':
      return action.payload;
      //eq state.title = book.title return state
  }
  return state;
}
