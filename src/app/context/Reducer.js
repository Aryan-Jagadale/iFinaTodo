export const initialState = {
  tasks: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_TASK":
      return {
        ...state,
        tasks: [...state.tasks, { task: action.payload, completed: false }],
      };
    case "REMOVE_FROM_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((p) => p.task !== action.payload.task),
      };
    case "TASK_COMPLETE":
      return {
        ...state,
        tasks: state.tasks.filter((p) =>
          p.completed === action.payload.completed
            ? (action.payload.completed = true)
            : action.payload.completed
        ),
      };

    case "GET_TASK":
      return {
        ...state,
        tasks: state.tasks.filter((p) =>
          p.task
            .toString()
            .toLowerCase()
            .includes(action.query.toString().toLowerCase())
        ),
      };
    
      default:
      return state;
  }
};
