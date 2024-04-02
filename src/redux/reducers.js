
const initialState = {
  list: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TASK':
      return {
        ...state,
        list: [...state.list, { id: action.payload.id, value: action.payload.value }]
      };
    case 'DELETE_TASK':
      return {
        ...state,
        list: state.list.filter(item => item.id !== action.payload.id)
      };
      case 'EDIT_TASK':
        return {
          ...state,
          list: state.list.map((item, i) =>
            i === action.payload.index ? { ...item, value: action.payload.editedTodo } : item
          )
        };
    default:
      return state;
  }
};

export default reducer;
