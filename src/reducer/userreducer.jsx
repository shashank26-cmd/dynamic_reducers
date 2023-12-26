

const formReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_FIELD':
      return {
        ...state,
        fields: state.fields.map((field) =>
          field.id === action.payload.id
            ? { ...field, value: action.payload.value }
            : field
        ),
      };
    case 'GO_TO_NEXT_PAGE':
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
      case 'GO_TO_PREV_PAGE':
        return {
          ...state,
          currentPage: state.currentPage - 1,
        };
    default:
      return state;
  }
};

export default formReducer;